
let screen=document.getElementById('screen');


let rad=document.getElementById('Rad');
let deg=document.getElementById('Deg');


let lnv=document.getElementById('lnv');
let sin=document.getElementById('sin');
let cos=document.getElementById('cos');
let tan=document.getElementById('tan');
let ans=document.getElementById('ans');
let pow=document.getElementById('pow');
let root=document.getElementById('root');
let log=document.getElementById('log');
let ln=document.getElementById('ln');

// //////////////////////////////////////////////////////////////////

function setText(sent) {
    screen.value+=sent;
}
// //////////////////////////////////////////////////////////////////
function clearCE() {
    let temp = screen.value;
    temp = temp.toString();
    temp = temp.slice(0, -1);
    screen.value = temp;
}

// //////////////////////////////////////////////////////////////////

let operand1 = 0;
let operand2 = 0;
let operation = null;
let result = 0;
let tempO1 = [];
let tempO2 = [];

function calc(a) {
    tempO1 = [];
    tempO2 = [];
    operand1 = 0;
    operand2 = 0;
    operation = null;
    let holder = a.toString();
    while (holder !== "") {
        let i = holder[0];
        if (!isNaN(i) && operation === null) {
            tempO1.push(i);
            holder = holder.slice(1);
            operand1 = Number(tempO1.join(''));
        }
        // ///////////////////////////////////////////////////////
        else if (!isNaN(i) && operation !== null) {
            tempO2.push(i);
            holder = holder.slice(1);
            operand2 = Number(tempO2.join(''));
            calcC(operand1, operand2, operation, holder);
        }
        // ///////////////////////////////////////////////////////////////////////
        else if (i === 's'||'c'||'t') {
            let func = "";
            let j = holder.indexOf(')');
            if (j !== -1) {
                func = holder.substring(0, j + 1);
                holder = holder.substring(j + 1);
                calcFunction(func,holder);
            } else {
                console.log("Invalid function");
                return;
            }
        }
        // //////////////////////////////////////////////////
        else {
            operation = i;
            holder = holder.slice(1);
        }
    }
}

function calcC(o1, o2, op, holder) {
    switch (op) {
        case '+':
            result = o1 + o2;
            break;
        case '-':
            result = o1 - o2;
            break;
        case '*':
            result = o1 * o2;
            break;
        case '/':
            if (o2 !== 0) {
                result = o1 / o2;
            } else {
                console.log("Can't divide by zero");
            }
            break;
        case '!':
            result = factorial(o1);
            break;
        case '%':
            result = o1 % o2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    if (holder === "") {
        screen.value = result;
    } else {
        calc(holder);
    }
}

function calcFunction(func,holder) {
    console.log(func)
    let functionName = func.substring(0, func.indexOf('('));
    console.log(functionName)
    let angle = parseFloat(func.substring(func.indexOf('(') + 1, func.indexOf(')')));
    switch (functionName) {
        case 'sin':
            result = Math.sin(angle);
            break;
        case 'cos':
            result = Math.cos(angle);
            break;
        case 'tan':
            result = Math.tan(angle);
            break;
        case 'asin':
            result = Math.asin(angle);
            break;
        case 'acos':
            result = Math.acos(angle);
            break;
        case 'atan':
            result = Math.atan(angle);
            break;
        case 'log':
            result = Math.log(angle);
            break;
        case 'ln':
            result = Math.log(angle);
            break;
        case 'sqrt':
            result = Math.sqrt(angle);
            break;
        default:
            console.log("Invalid function");
            return;
    }
    if (holder === "") {
        screen.value = result;
    } else {
        calc(holder);
    }
}



function factorial(f) {
    let fact=1;
    while (f>1) {
        fact*=f;
        f--;
    }
    return fact;
}
// //////////////////////////////////////////////////////////////////
function toggle() {
    if (deg.disabled) {
        rad.disabled = true;
        deg.disabled = false;
    }
    else{
        rad.disabled = false;
        deg.disabled = true;
    }
}
// //////////////////////////////////////////////////////////////////
function toRad(v) {
    let radian=v*(Math.PI/180);
    return radian;
}

// //////////////////////////////////////////////////////////////////

function replace(){
    if (lnv.value=='normal') {
        lnv.value='swaped';

        sin.innerHTML='sin<sup>-1</sup>';
        sin.value='sin^-1(';

        cos.innerHTML='cos<sup>-1</sup>';
        cos.value='cos^-1(';

        tan.innerHTML='tan<sup>-1</sup>';
        tan.value='tan^-1(';

        ans.innerHTML='Rnd';
        ans.value='Rnd';

        pow.innerHTML='y<sup>√x</sup>';
        pow.value='y^√x';

        root.innerHTML='x<sup>2</sup>';
        root.value='x^2';

        log.innerHTML='10<sup>x</sup>';
        log.value='10^x';

        ln.innerHTML='e<sup>x</sup>';
        ln.value='e^x';

    } else {
        lnv.value='normal';
        sin.innerHTML='sin';
        sin.value='sin(';

        cos.innerHTML='cos';
        cos.value='cos(';

        tan.innerHTML='tan';
        tan.value='tan(';

        ans.innerHTML='Ans';
        ans.value='Ans';

        pow.innerHTML='x<sup>y</sup>';
        pow.value='x^y';

        root.innerHTML='√';
        root.value='√(';

        log.innerHTML='log';
        log.value='log(';

        ln.innerHTML='ln';
        ln.value='ln(';
    }
}


// ///////////////////////////discarded of///////////////////////////////////////
// function prepareOp(a) {
//     let result = parseFloat(a[0]);
//     // let result=0;
//     // for (let i = 1; i < a.length; i++){
//     //     if (typeof currentArg === 'string' && !(currentArg === '+' || currentArg === '-' || currentArg === '*' || currentArg === '/' || currentArg=== '%' || currentArg==='sin(' || currentArg==='cos(' || currentArg==='tan(' || currentArg==='√(' || currentArg==='E' || currentArg==='log(')){
//     //     result += parseFloat(a[i]);
//     //     break;
//     //     }
//     let operator = '';

//     for (let i = 1; i < a.length; i++) {
//         const currentArg = a[i];
//         if (typeof currentArg === 'string' && (currentArg === '+' || currentArg === '-' || currentArg === '*' || currentArg === '/' || currentArg=== '%' || currentArg==='sin(' || currentArg==='cos(' || currentArg==='tan(' || currentArg==='√(' || currentArg==='E' || currentArg==='log(')){
//             operator = currentArg;
//         }
//         else if (typeof currentArg === 'number' || !isNaN(parseFloat(currentArg))){
//             switch (operator) {
//                 case '+':
//                     result += parseFloat(currentArg);
//                     break;
//                 case '-':
//                     result -= parseFloat(currentArg);
//                     break;
//                 case '*':
//                     result *= parseFloat(currentArg);
//                     break;
//                 case '/':
//                     if (parseFloat(currentArg) !== 0) {
//                         result /= parseFloat(currentArg);
//                     } else {
//                         console.log("Can't divide by zero");
//                     }
//                     break;
//                     case '!':
//                     result =factorial(parseFloat(currentArg));
//                     break;
//                     case '%':
//                         result %=parseFloat(currentArg);
//                         break;
//                     case 'sin(':
//                         result =Math.sin(parseFloat(currentArg.substring(4)));
//                         break;
//                     case 'cos(':
//                         result =Math.cos(parseFloat(currentArg.substring(4)));
//                         break;
//                     case 'tan(':
//                         result =Math.tan(parseFloat(currentArg.substring(4)));
//                         break;
//                     case 'log(':
//                         result =Math.log(parseFloat(currentArg.substring(4)));
//                         break;
//                     case 'E':
//                         result =parseFloat(currentArg);
//                         break;
//                     case '√(':
//                         result =Math.sqrt(parseFloat(currentArg.substring(2)));
//                         break;
//                 default:
//                     console.log("Invalid operator");
//                     return;
//             }
//         }
//         else{
//             screen.value = 'error';
//             return;
//         }
//     }
//     if (rad.disabled) {
//         screen.value = result;
//     }
//     else
//     screen.value = toRad(result);
// }

// ///////////////////////////packup//////////////////////////////////

// let operand1 = 0;
// let operand2 = 0;
// let operation = null;
// let result = 0;
// let tempO1 = [];
// let tempO2 = [];

// function calc(a) {
//     tempO1 = [];
//     tempO2 = [];
//     operand1 = 0;
//     operand2 = 0;
//     operation = null;
//     let holder = a.toString();
//     while (holder !== "") {
//         let i = holder[0];
//         if (!isNaN(i) && operation === null) {
//             tempO1.push(i);
//             holder = holder.slice(1);
//             operand1 = Number(tempO1.join(''));
//         } else if (!isNaN(i) && operation !== null) {
//             tempO2.push(i);
//             holder = holder.slice(1);
//             operand2 = Number(tempO2.join(''));
//             calcC(operand1, operand2, operation, holder);
//         } else {
//             operation = i;
//             holder = holder.slice(1);
//         }
//     }
// }

// function calcC(o1, o2, op, holder) {
//     switch (op) {
//         case '+':
//             result = o1 + o2;
//             break;
//         case '-':
//             result = o1 - o2;
//             break;
//         case '*':
//             result = o1 * o2;
//             break;
//         case '/':
//             if (o2 !== 0) {
//                 result = o1 / o2;
//             } else {
//                 console.log("Can't divide by zero");
//             }
//             break;
//         case '!':
//             result = factorial(o1);
//             break;
//         case '%':
//             result = o1 % o2;
//             break;
//         case 'sin(':
//             result = Math.sin(o1);
//             break;
//         case 'cos(':
//             result = Math.cos(o1);
//             break;
//         case 'tan(':
//             result = Math.tan(o1);
//             break;
//         case 'sin^-1(':
//             result = Math.asin(o1);
//             break;
//         case 'cos^-1(':
//             result = Math.acos(o1);
//             break;
//         case 'tan^-1(':
//             result = Math.atan(o1);
//             break;
//         case 'log(':
//             result = Math.log(o1);
//             break;
//         case 'ln(':
//             result = Math.ln(o1);
//             break;
//         case 'E':
//             result = Math.E;
//             break;
//         case '√(':
//             result = Math.sqrt(o1);
//             break;
//         default:
//             console.log("Invalid operator");
//             return;
//     }
//     if (holder === "") {
//         screen.value = result;
//     } else {
//         calc(holder);
//     }
// }