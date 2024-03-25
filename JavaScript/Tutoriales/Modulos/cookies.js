import{getCookie,setCookie,KEYS} from "utils.js";
console.log(KEYS);
let names = ["bg","text"];
loadCookies();

let inputs = document.querySelectorAll("input[type='color']")

inputs.forEach((input,i)=>{
    input.addEventListener("change",(evt)=>{
        let val = evt.target.value;
        setCookie(names[i],val);
        document.documentElement.style.setProperty(`--${names[i]}`,val);
    })
})

function loadCookies(){
    names.forEach((name) =>{
        let val = getCookie(name);
        document.getElementById(name).setAttribute("value",val);
        document.documentElement.style.setProperty(`--${name}`,val);
    })
}