const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");

container.addEventListener("click", function (event) {
    if (
        event.target.classList.contains("seat") &&
        !event.target.classList.contains("reserved")
    ) {
        event.target.classList.toggle("selected");
        calculateTotal();
    }
});

select.addEventListener("change", function (event) {
    calculateTotal();
});

function calculateTotal() {
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
    console.log(selectedSeatCount);
    let price = select.value;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;
}
