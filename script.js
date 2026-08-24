const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "1. Você tem mais amigos da sua idade ou com uma faixa etária muito diferente da sua?",
    alternativas: ["a) Sim", "b) Não"],
  },
  {
    enunciado: "2. O etarismo (ou preconceito de idade) costuma criar barreiras sociais que dificultam a aproximação e a amizade entre pessoas de gerações diferentes?",
    alternativas: ["a) Verdadeiro", "b) Falso"],
  },

  
    {
    enunciado: "3. Amizades que cruzam barreiras de idade (intergeracionais) trazem benefícios mútuos, permitindo a troca de experiências e a quebra de preconceitos etários?",
    alternativas: ["a) Falso", "b) Verdadeiro"],
  },
  {
    enunciado: "4. Afirmar rigidamente que 'jovens só devem andar com jovens e velhos só com velhos' é uma ideia que reforça a segregação imposta pelo etarismo na sociedade?",
    alternativas: ["a) Verdadeiro", "b) Falso"],
  },


    {
    enunciado: "5. O lema 'para as amizades, as idades não importam' desafia a lógica do etarismo ao valorizar a conexão humana e a afinidade pessoal acima de rótulos geracionais?",
    alternativas: ["a) Falso", "b) Verdadeiro"],
  },
  {
    enunciado: "6. O incentivo a atividades comunitárias que integram diferentes faixas etárias ajuda a reduzir a solidão e a construir uma sociedade menos egoísta?",
    alternativas: ["a) Verdadeiro", "b) Falso"],
  },


];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();