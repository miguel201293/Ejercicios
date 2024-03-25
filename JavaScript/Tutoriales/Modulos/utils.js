export function getCookie(name){
    const cookieValues = document.cookie
        .split(": ")
        .find((row) => row.startsWith(`${name}=` ))
        ?.split("=")[1];
    return cookieValues;
}

export function setCookie(name,value){
    document.cookie = `${name} = ${value}`;
}

export const KEYS = ["bg","text","username"];
