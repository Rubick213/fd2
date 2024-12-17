
window.addEventListener('DOMContentLoaded', loaded)

function loaded (event) {
    
    const formLinkJSON = [
        'https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json',
        'https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json'
    ];
    let arrLink = []
    let count = 0
    function formRequest(){
        if (arrLink.length < formLinkJSON.length) {
            $.ajax(formLinkJSON[count],{type:'GET',typeof:'json',success:god,error:errorRequest})
            function god(data) {
                if (data === '') {
                    return
                }
                arrLink[count] = data
                count++
                formRequest()                
            }
            function errorRequest(er) {
                // можно вывеcти какую нибуть ошибку
                return
            }
            return
        }
        
        if (arrLink.length === formLinkJSON.length) {
            form(...arrLink)
        }
        
    }
    formRequest()
}

function form(formDef1,formDef2) {
    // console.log(formDef1);
    // console.log(formDef2);
    function formSite(date) {
        let form = document.createElement('form')
        form.setAttribute('action','https://fe.it-academy.by/TestForm.php')
        form.setAttribute('method', 'GET')
        for (let i = 0; i < date.length; i++) {
            let element = date[i]
            let setBlock = block(element)
            form.appendChild(setBlock)
        }
    
        document.body.appendChild(form)
        
    }
    formSite(formDef1)
    formSite(formDef2)

    function block (obj) {
        // console.log(obj);
        let div = document.createElement('div')
        div.className = 'inputCapsul'
        let out

        let variantValue
        if (obj.hasOwnProperty('label')) { 
            let label = document.createElement('label')
            label.className = 'labelInfo'
            label.innerText = obj.label
            div.appendChild(label)
            let kind = obj.kind        
            switch (kind) {
                case 'longtext':
                case 'shorttext':
                    out = document.createElement('input')
                    out.setAttribute('type','text')
                    out.setAttribute('name', obj.name)
                    break;
                case 'number':
                    out= document.createElement('input')
                    out.setAttribute('type','number')
                    out.setAttribute('name', obj.name)
                    break;
                case 'dropdown':
                    out = document.createElement('select')
                    variantValue = obj.variants 
                    out.setAttribute('name',obj.name)

                    variantValue.forEach(el => {
                        let option = document.createElement('option')
                        option.setAttribute('value',el.value)
                        option.innerText = el.text
                        out.appendChild(option)   
                    })
                    out.selectedIndex = 2
                    break;
                case 'radio':
                    div.className = 'inputCapsulRadio'
                    let radioDiv = document.createElement('div')
                    radioDiv.className = 'radioDiv'
                    variantValue = obj.variants
                    variantValue.forEach(el => {
                        let radio = document.createElement('input');
                        radio.setAttribute('type', 'radio');
                        radio.setAttribute('value', el.value);
                        radio.setAttribute('name', obj.name);
                        radioDiv.appendChild(radio);

                        let radioLabel = document.createElement('label');
                        radioLabel.setAttribute('value',el.value)
                        radioLabel.innerText = el.text;
                        radioDiv.appendChild(radioLabel);
                    })
                    div.appendChild(radioDiv)
                    return div
                case 'check':
                    out = document.createElement('input')
                    out.setAttribute('type', 'checkbox')
                    out.setAttribute('checked',true)
                    out.setAttribute('name',obj.name)
                    break;
                case 'memo':
                    out = document.createElement('textarea')
                    div.className = 'area'
                    out.setAttribute('name',obj.name)
                    break;
            }
        } 
        if (obj.hasOwnProperty('caption')) {
            out = document.createElement('input')
            out.setAttribute('type','submit')
            out.setAttribute('value', obj.caption)
        }
        div.appendChild(out)
        return div
    }
}
