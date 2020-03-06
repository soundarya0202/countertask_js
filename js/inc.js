let Result=0;
let output=document.getElementById('display');
output.value=0;
let incr=document.getElementById('inc');
const outcr=document.getElementById('dec');


function increment(){ 
    if (output.value>10) {
        incr.disabled = true;
        outcr.disabled = true;

    }
    if(output.value>=0 &&output.value<10)
   { 
    result=output.value++;
    output.innerText=result;
}
}
function decrement(){
    if (output.value>10) {
        incr.disabled = true;
        outcr.disabled = true;
    }
    if(output.value>0 && output.value<=10)
    {
    result=output.value--;
    output.innerText=result;
}
}
incr.addEventListener("click",increment);
outcr.addEventListener("click",decrement);
