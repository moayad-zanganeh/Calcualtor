let display=document.querySelector('#display');
let btnClear=document.querySelector('#btn-clear');
let btnClearLastAction=document.querySelector('#btn-clear-last-action');
let btnBackSpace=document.querySelector('#btn-back-space');
let btnDiv=document.querySelector('#btn-Div');
let btnMul=document.querySelector('#btn-Mul');
let btnMinus=document.querySelector('#btn-Minus');
let btnPlus=document.querySelector('#btn-plus');
let btnPN=document.querySelector('#btn-pn');
let btnPoint=document.querySelector('#btn-pint');
let btnEquls =document.querySelector('#btn-equls');

let btnNumbers=document.querySelectorAll('.btn-number')

let setPoint = false;
let number1, number2 , result;
let setResult=false;
let OP="";

btnPlus.addEventListener('click',(e)=>{
    number1 =Number(display.textContent) ;
    display.textContent = "0.0"
    OP = "+"
})

btnMinus.addEventListener('click',(e)=>{
    number1 =Number(display.textContent) ;
    display.textContent = "0.0"
    OP = "-"
})

btnDiv.addEventListener('click',(e)=>{
    number1 =Number(display.textContent) ;
    display.textContent = "0.0"
    OP = "/"
})

btnMul.addEventListener('click',(e)=>{
    number1 =Number(display.textContent) ;
    display.textContent = "0.0"
    OP = "*"
})

btnEquls.addEventListener('click',(e)=>{
    
    number2=Number(display.textContent)

    switch(OP){
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "*":
            result = number1 * number2;
            break;
    }
    display.textContent = result;
})








btnPN.addEventListener('click', (e)=>{
    display.textContent = display.textContent * -1;
});

// btnPoint.addEventListener('click', (e)=>{
//     if(setPoint == false){
//         display.textContent+= ".";
//         setPoint = true;
//     }
// });

btnClear.addEventListener('click', (e)=>{
    display.textContent="0.0";
    setPoint = false;
});

btnBackSpace.addEventListener('click', (e)=>{
    let len = display.textContent.length;

    let lastDigit = display.textContent.substr(len - 1, len);

    if(lastDigit =="."){
        setPoint = false;
    }

if(len>1){
    display.textContent = display.textContent.substr(0, len - 1);
}else{    
    display.textContent = "0.0";
}})


btnNumbers.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(display.textContent=="0.0"){
            display.textContent=e.target.textContent;
        }else{
            display.textContent+=e.target.textContent;
        }
    })
})