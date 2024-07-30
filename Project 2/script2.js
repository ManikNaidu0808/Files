const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD";
let search = document.querySelector(".searchBox");
let fromCurrency = document.querySelector(".from");
let toCurrency = document.querySelector(".to");
let convert = document.querySelector(".convert");
let resultFrom;
let resultTo;
let searchValue;
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");

document.addEventListener('DOMContentLoaded', async function () {
    
    async function fetchCurrencies() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const currencies = Object.keys(data.rates);

            const fromSelect = document.getElementById('sel1');
            const toSelect = document.getElementById('sel2');

            currencies.forEach(currency => {
                const optionFrom = document.createElement('option');
                optionFrom.value = currency;
                optionFrom.textContent = currency;
                fromSelect.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = currency;
                optionTo.textContent = currency;
                toSelect.appendChild(optionTo);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    await fetchCurrencies();
});

function clearVal() {
    document.querySelector(".searchBox").value = "";
    document.getElementsByClassName(".from").value = "";
    document.querySelector(".to").value = "";
    finalValue.innerHTML = "";
    finalAmount.style.display = "none";
    // window.location.reload();
    // document.getElementsByClassName("finalValue").innerHTML = "";
};

convert.addEventListener("click", getResults);

async function getResults() {
    resultFrom = document.querySelector(".from").value;
    resultTo = document.querySelector(".to").value;
    searchValue = document.querySelector(".searchBox").value;

    if (searchValue === "" || isNaN(searchValue)) {
        alert("Please enter a valid number");
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const currency = await response.json();
        displayResults(currency);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    let convertedAmount = ((toRate / fromRate) * searchValue).toFixed(2);
    finalValue.innerHTML = convertedAmount
    console.log(finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2))
    finalAmount.style.display = "block";
    updateTable(resultFrom, resultTo, searchValue, convertedAmount);
    saveTableData(resultFrom, resultTo, searchValue, convertedAmount);
}


function updateTable(from, to, searchValue, rates){
    const tableBody = document.querySelector("#currencyTable tbody");
    const row = document.createElement('tr');
    const dateTime = new Date().toLocaleString();

    row.innerHTML = 
    `<td>${from}</td>
    <td>${to}</td>
    <td>${searchValue}</td>
    <td>${rates}</td>
    <td>${dateTime}</td>`;
    tableBody.appendChild(row);
}

function saveTableData(from, to, searchValue, rates) {
    let tableData = JSON.parse(localStorage.getItem("currencyTableData")) || [];
    const dateTime = new Date().toLocaleString();
    tableData.push({ from, to, searchValue, rates, dateTime });
    localStorage.setItem("currencyTableData", JSON.stringify(tableData));
}

function loadTableData() {
    let tableData = JSON.parse(localStorage.getItem("currencyTableData")) || [];
    const tableBody = document.querySelector("#currencyTable tbody");
    tableData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = 
        `<td>${data.from}</td>
        <td>${data.to}</td>
        <td>${data.searchValue}</td>
        <td>${data.rates}</td>
        <td>${data.dateTime}</td>`;
        tableBody.appendChild(row);
    });
}