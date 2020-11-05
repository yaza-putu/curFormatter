var curFormatter = function(){

    this.formatRupiah = function(value, prefix){
        let new_number;
        if(typeof value == 'number'){
            new_number = value.toString();
        }else{
            new_number = value.replace(/[^,\d]/g, '').toString();
        }       
        split = new_number.split(','),
        remains = split[0].length % 3,
        rupiah = split[0].substr(0, remains),
        thousands = split[0].substr(remains).match(/\d{3}/gi);

        if(thousands){
            separator = remains ? '.' : '';
            rupiah += separator + thousands.join('.');
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? prefix + rupiah : '');
    }

    this.unformatRupiah = function(value){
        let new_number = value.replace(/[^,\d]/g, '').toString().replace('.', '').replace(',', '.');
        return new_number; /*NB: don't reformat this value if decimal number*/
    }

    this.unformatInput = function(attrOutput, value){
        let parent = this;
        if(typeof attrOutput == "object")
        {
            attrOutput.value = parent.unformatRupiah(value);
        }
        if(typeof attrOutput == "string")
        {
            let inputs = document.querySelectorAll(attrOutput);
            [].forEach.call(inputs,function(input){
                parent.unformatInput(input, value);
            });
        }
    }

    this.formatInput = function(attrInput, prefix, attrOutput ){
        let parent = this;
        if(typeof attrInput == "object")
        {
            attrInput.value = parent.formatRupiah(attrInput.value, prefix);
            parent.unformatInput(attrOutput, attrInput.value);

            attrInput.addEventListener('keyup',function(){
                attrInput.value = parent.formatRupiah(attrInput.value, prefix);
                parent.unformatInput(attrOutput, attrInput.value);
            });
        }
        if(typeof attrInput == "string")
        {
            let inputs = document.querySelectorAll(attrInput);
            [].forEach.call(inputs,function(input){
                parent.formatInput(input, prefix, attrOutput);
            });
        }
    }
}