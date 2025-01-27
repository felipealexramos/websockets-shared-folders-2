import { encontrarUsuario } from "../db/usuariosDb.js";
import { autenticarUsuario } from "../utils/autenticarUsuario.js";
import { gerarJwt } from "../utils/gerarJwt.js";


function registrarEventosLogin(socket, io) {
    socket.on('autenticar-usuario', async (dados) => {
        const usuario = await encontrarUsuario(dados.nome);

        if (usuario) {
            const autenticado = autenticarUsuario(dados.senha, usuario);

            if (autenticado) {
                const tokenJwt = gerarJwt({ nomeUsuario: usuario.nome });

                socket.emit('autenticacao-sucesso', { nome: usuario.nome }, tokenJwt);
            } else {
                socket.emit('autenticacao-erro');
            }
        } else {
            socket.emit('usuario-nao-encontrado');
        }
    });
}

export { registrarEventosLogin };