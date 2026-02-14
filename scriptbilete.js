const destination = localStorage.getItem("destination");
const price = localStorage.getItem("price");

document.getElementById("title").textContent =
    `Rezervim për ${destination} – $${price}`;

function checkout() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const time = document.getElementById("time").value;

    if (!startDate || !endDate || !time) {
        alert("Ju lutem plotësoni të gjitha fushat!");
        return;
    }

    alert(
        `✅ Bileta juaj është blerë!\n\n` +
        `📍 Destinacioni: ${destination}\n` +
        `🛫 Vajtje: ${startDate}\n` +
        `🛬 Kthim: ${endDate}\n` +
        `⏰ Ora e nisjes: ${time}\n\n` +
        `💳 Çmimi: $${price}`
    );

    localStorage.clear();
}