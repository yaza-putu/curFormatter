# curFormatter
Javascript formatter Rupiah currency

## Fitur 
- Format number to rupiah
- Format Rupiah to number
- Format input (form input to format rupiah)
- Unformat input (form input to format number)

## How To Use
- Format number to rupiah
```javascript
var formater = new curFormatter();
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