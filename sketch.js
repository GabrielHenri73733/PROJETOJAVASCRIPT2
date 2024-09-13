let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria ();
}

function palavraAleatoria (){
  let palavra = ["Caminhante", "Caminho", "Caminha"];
  return random(palavra);
}

function inicializaCores (){
  background(220);
  fill ("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial (minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores ();
  
