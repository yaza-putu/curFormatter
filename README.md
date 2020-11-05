# curFormatter
Javascript formatter Rupiah currency

## Fitur 
- Format number to rupiah
- Format Rupiah to number
- Format input (form input to format rupiah)
- Unformat input (form input to format number)

## How To Use
- First initialize
```javascript
var formater = new curFormatter();
```
- Format number to rupiah
```javascript
formater.formatRupiah(120000,'Rp');
```
- Format Rupiah to number
```javascript
var formater = new curFormatter();
formater.unformatRupiah('Rp120.000');
```
- Format input (form input to format rupiah)
 you need 2 input element,example
 ```html
<input type="hidden" id="attrOutput">
<input type="text" id="attrInput">
 ```
 in javascript
 ```javascript
formater.formatInput('input#attrInput','Rp','input#attrOutput')
 ```