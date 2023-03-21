class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
        this.matricula = matricula;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, area, lattes) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
        this.area = area;
        this.lattes = lattes;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, curso) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
        this.curso = curso;
    }
}

let cadastroForm = document.getElementById('cadastroForm');
let tipoCadastro = document.getElementById('tipoCadastro');
let professorFields = document.getElementById('professorFields');
let alunoFields = document.getElementById('alunoFields');

function onTipoCadastroChange() {
    if (tipoCadastro.value === 'professor') {
        professorFields.style.display = 'block';
        alunoFields.style.display = 'none';
    } else if (tipoCadastro.value === 'aluno') {
        professorFields.style.display = 'none';
        alunoFields.style.display = 'block';
    } else {
        professorFields.style.display = 'none';
        alunoFields.style.display = 'none';
    }
}

tipoCadastro.addEventListener('change', onTipoCadastroChange);

function onSubmit(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    let pessoa = new Pessoa(
        cadastroForm.nome.value,
        cadastroForm.email.value,
        cadastroForm.dataNascimento.value,
        cadastroForm.telefoneFixo.value,
        cadastroForm.telefoneCelular.value,
        cadastroForm.matricula.value
    );

    if (tipoCadastro.value === 'professor') {
        let professor = new Professor(
            cadastroForm.nome.value,
            cadastroForm.email.value,
            cadastroForm.dataNascimento.value,
            cadastroForm.telefoneFixo.value,
            cadastroForm.telefoneCelular.value,
            cadastroForm.matricula.value,
            cadastroForm.area.value,
            cadastroForm.lattes.value
        );

        console.log(professor);
    } else if (tipoCadastro.value === 'aluno') {
        let aluno = new Aluno(
            cadastroForm.nome.value,
            cadastroForm.email.value,
            cadastroForm.dataNascimento.value,
            cadastroForm.telefoneFixo.value,
            cadastroForm.telefoneCelular.value,
            cadastroForm.matricula.value,
            cadastroForm.curso.value
        );

        console.log(aluno);
    } else {
        console.log(pessoa);
    }
}

cadastroForm.addEventListener('submit', onSubmit);