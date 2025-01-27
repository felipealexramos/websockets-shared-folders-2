import { emitirAutenticarUsuario } from "./socket-front-login.js";

const form = document.getElementById('form-login');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.querySelector('#input-usuario').value;
    const senha = form.querySelector('#input-senha').value;

    emitirAutenticarUsuario({ nome, senha });
});