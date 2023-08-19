const currencyOptions = [
    {code: "USD", name:"United States Dollar"},{code: "EUR", name:"Euro Member Countries"},
    {code: "GBP", name:"United Kingdom Pound"},{code: "JPY", name:"Japan Yen"},
    {code: "AUD", name:"Australia Dollar"},{code: "CAD", name:"Canada Dollar"},
    {code: "CHF", name:"Switzerland Franc"},{code: "KRW", name:"Korea (South) Won"},
    {code: "CNY", name:"China Yuan Renminbi"},{code: "SGD", name:"Singapore Dollar"},
    {code: "SEK", name:"Sweden Krona"},{code: "HKD", name:"Hong Kong Dollar"},
    {code: "NZD", name:"New Zealand Dollar"},{code: "NOK", name:"Norway Krone"},
    {code: "TRY", name:"Turkey Lira"},{code: "SAR", name:"Saudi Arabia Riyal"},
    {code: "MXN", name:"Mexico Peso"},{code: "THB", name:"Thailand Baht"},
    {code: "INR", name:"India Rupee"},{code: "IQD", name:"Iraq Dinar"},
    {code: "RUB", name:"Russia Ruble"},{code: "MYR", name:"Malaysian Ringgit"},
    {code: "BRL", name:"Brazil Real"},{code: "PLN", name:"Poland Zloty"},
    {code: "ZAR", name:"South Africa Rand"},{code: "PHP", name:"Philippines Peso"},
    {code: "AED", name:"United Arab Emirates Dirham"},{code: "DKK", name:"Denmark Krone"},
    {code: "BHD", name:"Bahrain Dinar"},{code: "CZK", name:"Czech Republic Koruna"},
    {code: "IDR", name:"Indonesia Rupiah"},{code: "HUF", name:"Hungary Forint"},
    {code: "ZWD", name:"Zimbabwe Dollar"},{code: "UAH", name:"Ukraine Hryvnia"},
    {code: "NPR", name:"Nepal Rupee"},{code: "PKR", name:"Pakistan Rupee"},
];

const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');

currencyOptions.forEach(currency => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value = currency.code;
    option2.value = currency.code;
    option1.textContent = `${currency.code} - ${currency.name}`;
    option2.textContent = `${currency.code} - ${currency.name}`;
    fromCurrencySelect.appendChild(option1);
    toCurrencySelect.appendChild(option2);
});




const currencyOne= document.querySelector("#fromCurrency");
const currencyTwo= document.querySelector("#toCurrency");
const amountOne= document.querySelector("#amount-one");
const amountTWo= document.querySelector("#amount-two");
const swap=document.querySelector("#swap");
const rate = document.querySelector("#rate");

const butn= document.getElementById("result");

// const apiKey=    "6c700a33495b31b66d01c1a9";
const apiUrl = `https://v6.exchangerate-api.com/v6/6c700a33495b31b66d01c1a9/latest/`;


function calculate() {
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;
    fetch(`${apiUrl}${currOne}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const rateE = data.conversion_rates[currTwo];
            rate.innerText = `1 ${currOne} = ${rateE} ${currTwo}`;
            amountTWo.value = (amountOne.value * rateE).toFixed(2);
        })
        .catch(error => console.error(error));
}

currencyOne.addEventListener('change',calculate);
currencyOne.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
amountTWo.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
    const temp =currencyOne.value;
    currencyOne.value=currencyTwo.value;
    currencyTwo.value=temp;
})



butn.addEventListener('click',()=>{
    calculate();
})
calculate();

