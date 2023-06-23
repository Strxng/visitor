// Implementação da estrutura do chat
class Chat {
  constructor() {
    this.usuarios = [];
  }

  adicionarUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  aceitarVisitante(visitante) {
    this.usuarios.forEach(usuario => usuario.aceitarVisitante(visitante));
  }
}

// Implementação da classe abstrata de usuário
class Usuario {
  constructor(nome, localizacao) {
    this.nome = nome;
    this.localizacao = localizacao;
  }

  aceitarVisitante(visitante) {
    visitante.visitarUsuario(this);
  }
}

// Implementações concretas de usuário
class UsuarioUtf extends Usuario {
  constructor(nome) {
    super(nome, "UTFPR");
  }
}

class UsuarioBalada extends Usuario {
  constructor(nome) {
    super(nome, "BALADA");
  }
}

// Implementação do visitante
class LocalizacaoVisitor {
  constructor(localizacao) {
    this.localizacao = localizacao;
  }

  visitarUsuario(usuario) {
    if (usuario.localizacao === this.localizacao) {
      console.log(`Mensagem enviada para ${usuario.nome}: Salve!`);
    } else {
      console.log(`Usuário ${usuario.nome} está em outra localização.`);
    }
  }
}

// Utilização do padrão Visitor
const chat = new Chat();

const usuario1 = new UsuarioUtf("Léo");
const usuario2 = new UsuarioUtf("Vini");
const usuario3 = new UsuarioBalada("Danilo");

chat.adicionarUsuario(usuario1);
chat.adicionarUsuario(usuario2);
chat.adicionarUsuario(usuario3);

const localizacaoBrasilVisitor = new LocalizacaoVisitor("UTFPR");
const localizacaoEUAVisitor = new LocalizacaoVisitor("BALADA");

chat.aceitarVisitante(localizacaoBrasilVisitor);
chat.aceitarVisitante(localizacaoEUAVisitor);
