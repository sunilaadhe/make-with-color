let button=document.querySelector("button");
let currmode="ligth";
button.addEventListener("click",()=>{
if(currmode==="ligth"){
    currmode="dark";
    button.innerText="pink";
    let body=document.querySelector("body").style.backgroundColor="pink";


}
else{
    currmode="ligth";
    button.innerText="red";
let body=document.querySelector("body").style.backgroundColor="red";

}
console.log(currmode);
});