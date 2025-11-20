let inputbox=document.getElementById("inputbox");
let ctof=document.getElementById("c-f");
let ftoc=document.getElementById("f-c");
let btn=document.getElementById("btn");
let result=document.getElementById("result");

function temp(){
    let input= inputbox.value;
    input=Number(input)
    if(ctof.checked){
        ans=input*9/5+32;
        result.textContent=ans+" °F";
    }
    else if(ftoc.checked){
        ans=(input-32)*(5/9);
        result.textContent=ans+" °C";
    }
    else{
        result.textContent="Choose any conversion above"
    }
}
