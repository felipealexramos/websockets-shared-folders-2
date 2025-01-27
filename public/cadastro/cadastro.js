import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.getElementById('form-cadastro');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.querySelector('#input-usuario').value;
    const senha = form.querySelector('#input-senha').value;

    emitirCadastrarUsuario({ nome, senha });
});