

var SpeechRecognition = window.webkitSpeechRecognition;
  
var escuta = new SpeechRecognition();

//guarda a referência a caixa de texto em uma variável
var caixaTexto = document.getElementById("caixaTexto"); 
var camera = document.getElementById("camera");
var result = document.getElementById("result");
var link = document.getElementById("link");




Webcam.set({
width:300,
height:200,
image_format:"png",
png_quality:100
})
var classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/zA7kSusY2/model.json',modelReady)


Webcam.attach(camera)


function modelReady(){
    console.log('modelo pronto')
}


function btnc(){
    

   
Webcam.snap((uri)=>{
console.log(uri)
result.style.display='block';
result.innerHTML="<img id='foto' src="+uri+">   "

})
}
function btnr(){
img = document.getElementById('resultado')
classifier.classify(img,gotResults)
}
function gotResults(erro,resultado){
if(erro){
    console.log(erro);

}else{
    console.log(resultado)


    previsao1=resultado[0].label;

    document.getElementById('result').innerHTML=previsao1;

}

}








