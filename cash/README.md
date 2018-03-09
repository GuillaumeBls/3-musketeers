# Cash

## Features

- Cash is a convertissor between different currencies as shown in the library lib/currencies
- The default currencies is EUR and GBP
- The default currencies can be change 

## Exemple

### Conversion

node index.js 1 usd : 
√ 0.81 (EUR) Euro
√ 3.38 (PLN) Polish Zloty

Conversion of USD 1 


node index.js 1 eur : 
√ 4.20 (PLN) Polish Zloty
√ 0.89 (GBP) Pound Sterling
√ 1.24 (USD) US Dollar

Conversion of EUR 1 


### Change default settings

node index.js --save usd eur gbp

The settings are inside appData 

## List of currencies 

In the library lib/currencies.js

"AUD": "Australian Dollar",
"RUB": "Russian Rouble",
"EUR": "Euro",
"BGN": "Bulgarian Lev",
"BRL": "Real Brazilian",
"CAD": "Canadian Dollar",
"CHF": "Swiss Franc",
"CNY": "Chinese Yuan",
"CZK": "Czech Koruna",
"DKK": "Danish Krone",
"GBP": "Pound Sterling",
"HKD": "Hong Kong Dollar",
"HRK": "Croatian Kuna",
"HUF": "Hungarian Forint",
"IDR": "Indonesian Rupiah",
"ILS": "Israeli Shekel",
"INR": "Indian Rupee",
"JPY": "Japanes Yen",
"KRW": "South Korean Won",
"MXN": "Mexican Peso",
"MYR": "Malaysian Ringgit",
"NOK": "Norwegian Krone",
"PHP": "Philippine Peso",
"PLN": "Polish Zloty",
"RON": "Romanian New Leu",
"SEK": "Swedish Krona",
"SGD": "Singapore Dollar",
"THB": "Thai Baht",
"TRY": "Turkish Lira",
"USD": "US Dollar",
"ZAR": "South African Rand",
"NZD": "New Zealand Dollar"

## Licence

Uncopyrighted 

1.0.0

The command to obtain the version is node index.js -v


