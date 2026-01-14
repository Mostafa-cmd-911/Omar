const formContainer = document.getElementById("userDataForm");
const API_BASE = "http://localhost:5000";

async function sendData(url, data) {
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

export async function getData(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log({ newData: data });
        });
}

formContainer.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(formContainer);
    const data = Object.fromEntries(formData.entries());

    if (!Object.values(data).every((v) => String(v).trim())) return;

    formContainer.reset();

    data.age = Number(data.age);

    console.log({ data });

    await sendData(`${API_BASE}/`, data);

    getData(`${API_BASE}/`);
});
