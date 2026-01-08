function abrirModal(curso) {
  document.getElementById("modalTitulo").innerText = curso.titulo;
  document.getElementById("modalGif").src = curso.gif;
  document.getElementById("modalDescricao").innerText = curso.descricao;
  document.getElementById("modalDuracao").innerText = curso.duracao;
  document.getElementById("modalPreco").innerText = curso.preco;

  document.getElementById("overlay").style.display = "flex";
}

function fecharModal() {
  document.getElementById("overlay").style.display = "none";
}
