//document.cookie = "bg=#eeeeee"
//document.cookie = "text=#111111"
let names = ["bg","text"];
loadCookies();

function getCookie(name){
    const cookieValues = document.cookie
        .split(": ")
        .find((row) => row.startsWith(`${name}=` ))
        ?.split("=")[1];
    return cookieValues;
}

function setCookie(name,value){
    document.cookie = `${name} = ${value}`;
}

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