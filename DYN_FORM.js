const formDef1=
[
{label:'Название сайта:',kind:'longtext',name:'sitename'},
{label:'URL сайта:',kind:'longtext',name:'siteurl'},
{label:'Посетителей в сутки:',kind:'number',name:'visitors'},
{label:'E-mail для связи:',kind:'shorttext',name:'email'},
{label:'Рубрика каталога:',kind:'dropdown',name:'division',
variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
{label:'Размещение:',kind:'radio',name:'payment',
variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
{label:'Разрешить отзывы:',kind:'check',name:'votes'},
{label:'Описание сайта:',kind:'memo',name:'description'},
{caption:'Опубликовать',kind:'submit'},
];
const formDef2=
[
{label:'Фамилия:',kind:'longtext',name:'lastname'},
{label:'Имя:',kind:'longtext',name:'firstname'},
{label:'Отчество:',kind:'longtext',name:'secondname'},
{label:'Возраст:',kind:'number',name:'age'},
{caption:'Зарегистрироваться',kind:'submit'},
];


//f1
function formSite(date) {
    let form = setForm('get')
    for (let i = 0; i < date.length; i++) {
        let element = date[i]
        let setBlock = block(element)
        form.appendChild(setBlock)
    }
   
    document.body.appendChild(form)
    
}
formSite(formDef1)
formSite(formDef2)


function setForm (method) {
    let form = document.createElement('form')
    form.setAttribute('action','https://fe.it-academy.by/TestForm.php')
    form.setAttribute('method', method)
    return form
}

function block (obj) {
    let div = document.createElement('div')
    div.className = 'inputCapsul'
    let out

    let variantValue
    if (obj.hasOwnProperty('label')) { 
        let label = document.createElement('label')
        label.className = 'labelInfo'
        label.innerText = obj.label
        div.appendChild(label)
        // console.log(label.innerText);

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





















