const url_server = "http://localhost:9999";

function cadastrar() {
    console.log('Enviando dados ao servidor...');
  
    // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
    const dados = {
      nome: document.querySelector('[id="nome"]').value,
      data_nascimento: document.querySelector('[id="dataNascimento"]').value,
      telefone: document.querySelector('[id="telefone"]').value,
      endereco: document.querySelector('[id="endereco"]').value,
      cpf: document.querySelector('[id="cpf"]').value,
      peso: document.querySelector('[id="peso"]').value,
      altura: document.querySelector('[id="altura"]').value,
    }

    console.log(dados);

    // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
    fetch(`${url_server}/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        // Depois de feita a requisição, o front-end irá receber um retorno do servidor
        .then(response => response.json())
        // Se toda a requisição deu certo, será informado no log
        .then(dados => {
            console.log('Resposta do servidor:', dados);
            // Faça algo com a resposta do servidor, se necessário
        })
        // Caso tenha algum tipo de erro na requisição, é lançada a excessão
        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);
            // Trate os erros, se necessário
        });
  
  }

  function listarPessoas() {
    fetch(`${url_server}/pessoas`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

function listarPessoas() {

    // faça algo antes de montar a tabela, SE NECESSÁRIO

fetch(`${url_server}/pessoas`)
    .then(response => response.json())
    .then(data => {
        // Inserindo os dados da pessoa na tabela
                    // fazendo um loop usando forEach para percorrer todos os dados retornados pelo servidor
                    data.forEach(pessoa => {
                            // Criando os elementos HTML
            const tabela = document.querySelector('table');
            const elementTr = document.createElement('tr');
            const tdNome = document.createElement('td');
            const tdDataNascimento = document.createElement('td');
            const tdTelefone = document.createElement('td');
            const tdEndereco = document.createElement('td');
            const tdCpf = document.createElement('td');
            const tdPeso = document.createElement('td');
            const tdAltura = document.createElement('td');
        
                            // Inserindo os dados da pessoa no elemento	
            tdNome.textContent = pessoa.nome;
            tdDataNascimento.textContent = pessoa.data_nascimento;
            tdTelefone.textContent = pessoa.telefone;
            tdEndereco.textContent = pessoa.endereco;
            tdCpf.textContent = pessoa.cpf;
            tdPeso.textContent = pessoa.peso;
            tdAltura.textContent = pessoa.altura;

                            // Inserindo os elementos nas linhas da tabela (tr => TableRow)
            elementTr.appendChild(tdNome);
            elementTr.appendChild(tdDataNascimento);
            elementTr.appendChild(tdTelefone);
            elementTr.appendChild(tdEndereco);
            elementTr.appendChild(tdCpf);
            elementTr.appendChild(tdPeso);
            elementTr.appendChild(tdAltura);

                            // Adicionando a linha com as informações na tabela
            tabela.appendChild(elementTr);
    });
});
};