const inputNum = document.getElementById('in');
const bttn = document.querySelector('button');
const temp1= document.getElementById('temp1');
const temp2 = document.getElementById('temp2')
const outDiv = document.getElementById('output')

const calc = () => {
    let val = parseFloat(inputNum.value)
    // celisius to kelvin
    if (!val){
        return `Enter a number`;
    }
    if (temp1.value == 'cel1' && temp2.value == 'kel2'){
        return `${val + 273.15} Kelvin`;
    }
    //celisius to fahrenheit
    if (temp1.value == 'cel1' && temp2.value == 'fahr2'){
        return `${(val * 9 / 5) + 32} Fahrenheit`;
    }
    // kelvin to celisius
    if (temp1.value == 'kel1' && temp2.value == 'cel2'){
        return `${val - 273.15} Celisius`;
    }
    // kelvin to fahrenheit
    if (temp1.value == 'kel1' && temp2.value == 'fahr2'){
        return `${(val - 273.15) * 9 / 5 + 32} Fahrenheit`;
    }
    // fahrenheit to celisius
    if (temp1.value == 'fahr1' && temp2.value == 'cel2'){
        return `${(val - 32) * 5 / 9} Celisius`;
    }
    // fahrenheit to kelvin
    if (temp1.value == 'fahr1' && temp2.value == 'kel2'){
        return `${(val - 32) * 5 / 9 + 273} Kelvin`;
    }
    return "Change The the Second Dropdown to Change Temprature Units"
}

const click = () => {
    outDiv.innerHTML = `<p id='output'>${calc()}<p>`;
} 
bttn.addEventListener('click', click);
