
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
    if(holder.includes('s'||'c'||'t')||holder.startsWith('l')){
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
        else if (i === 's'||'c'||'t'||'l') {
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
else{
    let operands = [];
let operators = [];
let result = 0;
let tempOperand = [];

    while (holder !== "") {
        let char = holder[0];
        if (!isNaN(char) || char === '.') {
            tempOperand.push(char);
            holder = holder.slice(1);
            if (holder === "") {
                operands.push(Number(tempOperand.join('')));
            }
        } else {
            if (tempOperand.length > 0) {
                operands.push(Number(tempOperand.join('')));
                tempOperand = [];
            }
            if(char=='('||char==')'||char=='o'||(char=='s'&&operators[operators.length-1]=='c')){
                char=char.slice(1);
            }
        else
        operators.push(char);
            holder = holder.slice(1);
        }
    }
    calculateResult();

function calculateResult() {
    result = operands[0];
    for (let i = 0; i < operators.length; i++) {
        let op = operators[i];
        let nextOperand = operands[i + 1];
        switch (op) {
            case '+':
                result += nextOperand;
                break;
            case '-':
                result -= nextOperand;
                break;
            case '*':
                result *= nextOperand;
                break;
            case '/':
                if (nextOperand !== 0) {
                    result /= nextOperand;
                } else {
                    console.log("Can't divide by zero");
                    return;
                }
                break;
            case '!':
                result = factorial(result);
                break;
            case '%':
                result %= nextOperand;
                break;
            default:
                if (op.startsWith('s') || op.startsWith('c') || op.startsWith('t')) {
                    result = calculateTrigFunction(op, nextOperand);
                } else if (op.includes('log') || op.startsWith('l') || op.includes('sq')) {
                    result = calculateLogFunction(op, nextOperand);
                } else {
                    console.log("Invalid operator or function");
                    return;
                }
        }
    }
    screen.value = result;
}

function calculateTrigFunction(op, angle) {
    let functionName = op.substring(0, 3);
    angle = angle * (Math.PI / 180);
    switch (functionName) {
        case 's':
            return Math.sin(angle);
        case 'c':
            return Math.cos(angle);
        case 't':
            return Math.tan(angle);
        case 'asin':
            return Math.asin(angle);
        case 'acos':
            return Math.acos(angle);
        case 'atan':
            return Math.atan(angle);
        default:
            console.log("Invalid trigonometric function");
            return;
    }
}

function calculateLogFunction(op, num) {
    let functionName = op.substring(0, 3);
    switch (functionName) {
        case 'log':
            return Math.log10(num);
        case 'ln':
            return Math.log(num);
        case 'sq':
            return Math.sqrt(num);
        default:
            console.log("Invalid logarithmic function");
            return;
    }
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
    console.log(angle)
    if(deg.disabled){
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
            result = Math.log10(angle);
            break;
        case 'ln':
            result = Math.log(angle);
            break;
        case 'sq':
            result = Math.sqrt(angle);
            break;
        default:
            console.log("Invalid function");
            return;
    }
}
else{
    switch (functionName) {
        case 'sin':
            result = Math.sin(toRad(angle));
            break;
        case 'cos':
            result = Math.cos(toRad(angle));
            break;
        case 'tan':
            result = Math.tan(toRad(angle));
            break;
        case 'asin':
            result = Math.asin(toRad(angle));
            break;
        case 'acos':
            result = Math.acos(toRad(angle));
            break;
        case 'atan':
            result = Math.atan(toRad(angle));
            break;
        case 'log':
            result = Math.log10(angle);
            break;
        case 'ln':
            result = Math.log(angle);
            break;
        case 'sq':
            result = Math.sqrt(angle);
            break;
        default:
            console.log("Invalid function");
            return;
    }
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
        lnv.style.backgroundColor='rgb(241, 243, 244)';
        lnv.style.boxShadow='0 0 0 1px black';

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
        lnv.style.backgroundColor='rgb(218, 220, 224)';
        lnv.style.boxShadow='0 0 0 0px black';
        
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
        root.value='sq(';

        log.innerHTML='log';
        log.value='log(';

        ln.innerHTML='ln';
        ln.value='ln(';
    }
}