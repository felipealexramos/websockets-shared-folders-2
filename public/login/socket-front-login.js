import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
    socket.emit('autenticar-usuario', dados);
}

socket.on('autenticacao-sucesso', (tokenJwt) => {
    alert('Usuário autenticado com sucesso!')
    window.location.href = '/';

    definirCookie('token', tokenJwt);
});
socket.on('autenticacao-erro', () => alert('Usuário ou senha inválidos!'));
socket.on('usuario-nao-encontrado', () => alert('Usuário não encontrado!'));

export { emitirAutenticarUsuario };