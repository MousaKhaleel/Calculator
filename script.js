
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



function setText(sent) {
    screen.value+=sent;
}
function clearCE() {
    let temp = screen.value;
    temp = temp.toString();
    temp = temp.slice(0, -1);
    screen.value = temp;
}

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

function toRad(v) {
    let radian=v*(Math.PI/180);
    return radian;
}

function factorial(f) {
    let fact=1;
    while (f>1) {
        fact*=f;
        f--;
    }
    return fact;
}

function replace(){
    if (lnv.value=='normal') {
        lnv.value='swaped';

        sin.innerText='sin^-1';
        sin.value='sin^-1(';

        cos.innerText='cos^-1';
        cos.value='cos^-1(';

        tan.innerText='tan^-1';
        tan.value='tan^-1(';

        ans.innerText='Rnd';
        ans.value='Rnd';

        pow.innerText='y^√x';
        pow.value='y^√x';

        root.innerText='x^2';
        root.value='x^2';

        log.innerText='10^x';
        log.value='10^x';

        ln.innerText='e^x';
        ln.value='e^x';

    } else {
        lnv.value='normal';
        sin.innerText='sin';
        sin.value='sin(';

        cos.innerText='cos';
        cos.value='cos(';

        tan.innerText='tan';
        tan.value='tan(';

        ans.innerText='Ans';
        ans.value='Ans';

        pow.innerText='x^y';
        pow.value='x^y';

        root.innerText='√';
        root.value='√(';

        log.innerText='log';
        log.value='log(';

        ln.innerText='ln';
        ln.value='ln(';
    }
}

