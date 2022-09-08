var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

//now add listener
 input.addEventListener("keyup",myResult);
 inputType.addEventListener("change",myResult);
 resultType.addEventListener("change",myResult);


 inputTypeValue = inputType.value;
 resultTypeValue = resultType.value;

 function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
 

//  compare input and result type value and add formula

if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
    result.value = Number(input.value) * 0.001;
    // This is the formular for converting from meter to kilometer

}else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){
    result.value = Number(input.value) * 100;
    // This is the formular for converting from meter to centimeter

}else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
    // This is the formular for converting from meter to meter
    result.value = input.value
}

if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter'){
    result.value = Number(input.value) * 1000;
    // This is the formular for converting from kilometer to meter

}else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){
    result.value = Number(input.value) * 100000;
    // This is the formular for converting from kilometer to centimeter

}else if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer'){
    // This is the formular for converting from kilometer to kilometer
    result.value = input.value
}

if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer'){
    result.value = Number(input.value) * 0.00001;
    // This is the formular for converting from centimeter to kilometer

}else if(inputTypeValue === 'centimeter' && resultTypeValue === 'meter'){
    result.value = Number(input.value) * 0.01;
    // This is the formular for converting from centimeter to meter

}else if(inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){
    // This is the formular for converting from centimeter to centimeter
    result.value = input.value
}
}
// This is for the clear button.
let clear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

clear.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '');
});




