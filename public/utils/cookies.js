function definirCookie(nome, valor) {
    document.cookie = `${nome}=${valor};path=/`;
}

function obterCookie(nome) {
    return document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(`${nome}=`))
        ?.split("=")[1];
}

function removerCookie(nome) {
    document.cookie = `${nome}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}

export { definirCookie, obterCookie, removerCookie };