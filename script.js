// Função para salvar a nota
function saveNote() {
    const noteContent = document.getElementById('note').value; // Pega o conteúdo da textarea
    if (noteContent) {
        localStorage.setItem('nota', noteContent); // Salva a nota no localStorage
        alert('Nota salva com sucesso!');
    } else {
        alert('Por favor, escreva algo antes de salvar.');
    }
}

// Função para carregar a nota ao abrir a página
function loadNote() {
    const savedNote = localStorage.getItem('nota'); // Recupera a nota salva
    if (savedNote) {
        document.getElementById('note').value = savedNote; // Preenche a textarea com a nota salva
    }
}

// Carrega a nota quando a página é carregada
window.onload = loadNote;
