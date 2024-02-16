
let screen=document.getElementById('screen');

function setText(sent) {
    screen.value+=sent;
}
function clearCE() {
    screen.value='';
}
function prepareOp(a){
    // let temp=a.toString;
    let op=parseInt(temp);

    // if (.checked) {
        screen.value=op;
    // }
    // else
    // toRad(op);
}

function t0Rad(o) {
    let rad=o*(3.14/180);
    screen.value=rad;
}