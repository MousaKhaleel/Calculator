
let screen=document.getElementById('screen');

function setText(sent) {
    screen.value+=sent;
}
function clearCE() {
    screen.value='';
}
function prepareOp(a){
    // let temp=a.toString;
    let op=temp+0;
    // let op=parseInt(temp);

    // if (.checked) {
        screen.value=op;
    // }
    // else
    // toRad(op);
}
let rad=document.getElementById('Rad');
let deg=document.getElementById('Deg');
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

function t0Rad(v) {
    let radian=v*(3.14/180);
    screen.value=radian;
}

function factorial() {
    let temp=screen.value;
    let fact=1;
    while (temp>1) {
        fact*=temp;
        temp--;
    }
    screen.value=fact;
}

let lnv=document.getElementById('lnv');
function replace(){
    if (lnv.value=='normal') {
        
    } else {
        
    }
}