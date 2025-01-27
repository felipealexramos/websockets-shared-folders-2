const socket = io();

function emitirCadastrarUsuario(dados) {
    socket.emit('cadastrar_usuario', dados);
}

socket.on('cadastrar_sucesso', () => {
    alert('Usuário cadastrado com sucesso!');
});

socket.on('cadastrar_erro', () => {
    alert('Erro no cadastro do usuário!');
});

socket.on('usuario_existente', () => {
    alert('Usuário já cadastrado!');
});

export { emitirCadastrarUsuario };
