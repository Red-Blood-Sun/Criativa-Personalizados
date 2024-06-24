// CARROSEL
// Obtém referências aos elementos HTML dos botões e da moldura de imagem
const Bot_Voltar = document.getElementById("previSlide");
const Bot_Avancar = document.getElementById("nextSlide");
const Moldura = document.getElementById("Moldura");

// Define o intervalo de tempo para mudar as imagens (3 segundos)
const tempo = 1000;

// Define a lista de imagens e o índice inicial
var imagens = ["Carrosel1", "Carrossel2", "Carrossel3"];
var indiceDaUltimaImagem = imagens.length - 1;
var indice = 0;

// Limpa o conteúdo dos botões (opcional)
Bot_Avancar.innerHTML = "";
Bot_Voltar.innerHTML = "";

// Variável para armazenar o ID do intervalo
var intervaloAtual;

// Define as funções a serem chamadas quando os botões são clicados
Bot_Avancar.onclick = AvancarImg;
Bot_Voltar.onclick = VoltarImg;

// Inicia o intervalo de mudança de imagens ao carregar a página
comecaIntervalo();

// Função para iniciar o intervalo que muda as imagens automaticamente
function comecaIntervalo() {
    intervaloAtual = setInterval(function() {
        MudaImagem(indice);
        IncrementaIndice();
    }, tempo);
}

// Função para pausar o intervalo
function pausaIntervalo() {
    clearInterval(intervaloAtual);
}

// Função para mudar a imagem exibida
function MudaImagem(indice) {
    Moldura.src = `../img/${imagens[indice]}.png`;
}

// Função para avançar para a próxima imagem e reiniciar o intervalo
function AvancarImg() {
    TrocaImagemManualmente("ir")
}

// Função para voltar para a imagem anterior e reiniciar o intervalo
function VoltarImg() {
    TrocaImagemManualmente("voltar");
}

function TrocaImagemManualmente(VoltarOuIr){
    pausaIntervalo();
    SelecionaIncremento(VoltarOuIr);
    MudaImagem(indice);
    comecaIntervalo();
}

function SelecionaIncremento(VoltarOuIr){
    if(VoltarOuIr == "voltar")
        {
            DecrementaIndice();
        }
    else if(VoltarOuIr == "ir")
        {
            IncrementaIndice();
        }
}

//Função que incrementa o indice
function IncrementaIndice(){
    indice++;
    if (indice > indiceDaUltimaImagem) {
        indice = 0;
    }
}

//Função que decrementa o indice
function DecrementaIndice(){
    indice--;
    if (indice == -1) {
        indice = indiceDaUltimaImagem;
    }
}


// MODO ESCURO E CLARO
// Obtém referências aos elementos HTML que serão afetados pelo modo claro/escuro
var btnModo = document.getElementById("btnModo");
var infos = document.getElementsByTagName("li");
var tagsLinks = document.getElementsByTagName("a");
var titulosDePrimeiraOrdem = document.getElementsByTagName("h1");
var titulosDeSegundaOrdem = document.getElementsByTagName("h2");
var fundoPrincipal = document.getElementsByTagName("body");
var listafig = document.getElementsByTagName("figcaption");


// Define o modo padrão como "escuro" e ajusta o botão de modo
var modo = "claro";
btnModo.style.backgroundImage = 'url(../img/icone_claro.png)';

// Define a função a ser chamada quando o botão de modo é clicado
btnModo.onclick = MudarModo;
btnModo.innerText = "";

// Função para alternar entre modo claro e escuro
function MudarModo() {
    if (modo == "claro") {
        MudaParaModoEscuro("white", "black");
    } else {
        MudaParaModoClaro("rgb(42, 27, 27)", "white");
    }
}

function MudaParaModoEscuro(corTextos, corFundoPrincipal)
{
    // Mudar para modo escuro
    MudaParaUmDeterminadoModo(corTextos, corFundoPrincipal, "escuro");
}

function MudaParaModoClaro(corTextos, corFundoPrincipal)
{
    // Mudar para modo claro
    MudaParaUmDeterminadoModo(corTextos, corFundoPrincipal, "claro");
}

function MudaParaUmDeterminadoModo(corTextos, corFundoPrincipal, novoModo)
{
    btnModo.style.backgroundImage = `url(../img/icone_${novoModo}.png)`;
    
    MudaCorDosElementos(listafig, corTextos);
    MudaCorDosElementos(infos, corTextos);
    MudaCorDosElementos(tagsLinks, corTextos);
    MudaCorDosElementos(titulosDePrimeiraOrdem, corTextos);
    MudaCorDosElementos(titulosDeSegundaOrdem, corTextos);
    MudaCorDeFundoDosElementos(fundoPrincipal, corFundoPrincipal);
    MudaCorDeFundoDosElementos(titulosDePrimeiraOrdem, corFundoPrincipal);
    modo = novoModo;
}

function MudaCorDosElementos(listaDeElementos, cor){
    for(var i = 0; i < listaDeElementos.length; i++) {
        listaDeElementos[i].style.color = cor;
    }
}

function MudaCorDeFundoDosElementos(listaDeElementos, cor){
    for(var i = 0; i < listaDeElementos.length; i++) {
        listaDeElementos[i].style.backgroundColor = cor;
    }
}

// Define as funções para alterar a aparência do botão de modo ao passar o mouse
btnModo.onmouseout = MudarFundoSaindoDeDentro;
btnModo.onmouseover = MudarFundoVindoDeFora;

// Função para alterar a aparência do botão ao passar o mouse sobre ele
function MudarFundoVindoDeFora() {
    if (modo == "claro") {
        btnModo.style.backgroundImage = 'url(../img/icone_escuro.png)';
    } else {
        btnModo.style.backgroundImage = 'url(../img/icone_claro.png)';
    }
}

// Função para restaurar a aparência do botão ao retirar o mouse de cima dele
function MudarFundoSaindoDeDentro() {
    if (modo == "claro") {
        btnModo.style.backgroundImage = 'url(../img/icone_claro.png)';
    } else {
        btnModo.style.backgroundImage = 'url(../img/icone_escuro.png)';
    }
}
