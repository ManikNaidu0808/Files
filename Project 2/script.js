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
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};

convert.addEventListener("click", getResults);

async function getResults(){
     resultFrom = document.querySelector(".from").value;
     resultTo = document.querySelector(".to").value;
     searchValue = document.querySelector(".searchBox").value;

    if(searchValue === "" || isNaN(searchValue)){
        alert("Please enter a valid number");
    }
    try{
        const response = await fetch(apiUrl);
        const currency = await response.json();
        displayResults(currency);
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}

function displayResults(currency){
    let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
    finalValue.innerHTML =((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}

