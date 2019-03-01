var num1, num2, result, n1, n2, out;
n1 = document.getElementById("num1");
n2 = document.getElementById("num2");
out = document.getElementById("out");

function getNum(){
    num1 = n1.value;
    num1 = parseInt(num1);
    num2 = n2.value;
    num2 = parseInt(num2);
}

function clear(){
    n1.value = "";
    n2.value = "";
}

function plus(){
    getNum ();
    result = num1+num2;
    out.innerHTML = result;
    clear();
}

function minus(){
    getNum ();
    result = num1-num2;
    out.innerHTML = result;
    clear();
}

function multiply(){
    getNum ();
    result = num1*num2;
    out.innerHTML = result;
    clear();
}

function divide(){
    getNum ();
    if (num2 == 0){
        alert ("Division by 0 is imposible");
    }
    else {
        result = num1/num2;
        out.innerHTML = result;
        clear();
    }
}