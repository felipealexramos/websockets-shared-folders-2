import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { obterCookie, removerCookie } from "./utils/cookies.js";

const tokenJwt = obterCookie("token");
console.log("token", tokenJwt);
const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
const botaoLogout = document.getElementById("botao-logout");

botaoLogout.addEventListener("click", () => {
  removerCookie("token");
  alert("Você foi deslogado!");
  window.location.href = "/login/index.html";
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a
      href="/documento/index.html?nome=${nomeDocumento}"
      class="list-group-item list-group-item-action"
      id="documento-${nomeDocumento}"
    >
      ${nomeDocumento}
    </a>
  `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);

  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
