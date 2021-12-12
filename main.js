var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        Speak();
        console.log("taking selfie");
    }
}
function Speak(){
var synth=window.speechSynthesis;
speakData="taking your selfie in five seconds";
var utterthis= new SpeechSynthesisUtterance(speakData);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
    takeSnapshot();
    save();
},5000);
}
 Webcam.set({
     width:360,
     height:250,
     image_format:"png",
     png_quality:90
 });
 camera=document.getElementById("camera");
 function takeSnapshot(){
     Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>";    
     });
 }
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}