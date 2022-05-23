const washCarEl = document.getElementById("washCar-el")
const mowLawnEl = document.getElementById("mowLawn-el")
const pullWeedsEl = document.getElementById("pullWeeds-el")
const invoiceEl = document.getElementById("sendInvoice")
const allClasses = document.getElementsByClassName("tasks")
let p1El = document.getElementById("p1")
let p2El = document.getElementById("p2")
let p3El = document.getElementById("p3")
let p4El = document.getElementById("p4")
let p5El = document.getElementById("p5")
let p6El = document.getElementById("p6")
let totalAmountEl = document.getElementById("total-amount")

class Task {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let tWashCar = new Task("Wash Car", 10);
let tMowLawn = new Task("Mow Lawn", 20);
let tPullWeeds = new Task("Pull Weeds", 30);
let sumPrice = 0;

washCarEl.addEventListener("click", function() {
    clickedButton (10, washCarEl, p1, "Wash Car", p4, '10')

}, {once : true});

mowLawnEl.addEventListener("click", function() {
    clickedButton (20, mowLawnEl, p2, "Mow Lawn", p5, '20')

}, {once : true});

pullWeedsEl.addEventListener("click", function() {
    clickedButton (30, pullWeedsEl, p3, "Pull Weeds", p6, '30')

}, {once : true});

invoiceEl.addEventListener("click", function() {
    sumPrice = 0;
    totalAmountEl.textContent = "$ " + sumPrice;
    window.location.reload()
} )

function clickedButton (taskPrice, taskClass, textAdd, buttonName, priceAdd, buttonPrice) {
    sumPrice += taskPrice
    totalAmountEl.textContent = "$ " + sumPrice;
    taskClass.classList.remove('tasks')
    taskClass.classList.add('disabledClass')
    textAdd.textContent = buttonName;
    priceAdd.textContent = buttonPrice + " $";
}



