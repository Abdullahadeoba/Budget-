function arith() {
    var priceOfItem = Number(document.getElementById("price").value)
    var newTotal = Total - priceOfItem
    showMoney.innerHTML = "Available money: ₦" + newTotal
    Total = newTotal
}

var Total = 10000
showMoney.innerHTML = "Available money: ₦" + Total

var Date = new Date().toLocaleDateString()
showDate.innerHTML = "Today's Date: "  + Date
showDate.innerHTML = "Today's Date: "  + Date

function addBudget() {
    if (item.value === "" || price.value === "") {
        emptyField.style.display = "block"
    } else {
        emptyField.style.display = "none"
        if (Number(price.value) > Total) {
            overSpend.style.display = "block"
        } else {
            overSpend.style.display = "none"
            showBudget.innerHTML += "<p class='my-2'>" + item.value + ' - ₦' + price.value + "</p>"
            arith()
            item.value = ""
            price.value = ""
        }
    }
}