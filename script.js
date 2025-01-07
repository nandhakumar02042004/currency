async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (!amount) {
        alert("Please enter an amount.");
        return;
    }

    const apiKey = "YOUR_API_KEY"; // Get your API key from an exchange rate service like ExchangeRate-API
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.rates && data.rates[toCurrency]) {
            const exchangeRate = data.rates[toCurrency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById("convertedAmount").textContent = `${convertedAmount} ${toCurrency}`;
        } else {
            alert("Unable to fetch exchange rate data.");
        }
    } catch (error) {
        alert("Error fetching data. Please try again.");
        console.error(error);
    }
}
