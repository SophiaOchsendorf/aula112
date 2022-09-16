//https://teachablemachine.withgoogle.com/models/lqC6HeQsP/

//treinamento do projeto
prediction_1 = ""; 
prediction_2 = "";
Webcam.set({
    width:350,
    height:300,
    imageFormat:'png',
    pngQualit:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8NpOS7ZYi/model.json',modelLoaded);

function modelLoaded() {
    console.log('modelLoaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é" + prediction_1;
    speakData2 = "E segunda previsão é" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speakData1+ speakData2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);document.g
        getElementById("resultEmotionName").innerHTML = results[0].label;
        getElementById("resultEmotionName2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "feliz")
        {
            document.getElementById("updateEmoji").innerHTML ="&#128522;";
        }
        if(results[0].label == "triste")
        {
            document.getElementById("updateEmoji").innerHTML ="&#128532;";
        }
        if(results[0].label == "raiva")
        {
            document.getElementById("updateEmoji").innerHTML ="&#128548;";
        }

        if(results[1].label == "feliz")
        {
            document.getElementById("updateEmoji2").innerHTML ="&#128522;";
        }
        if(results[1].label == "triste")
        {
            document.getElementById("updateEmoji2").innerHTML ="&#128532;";
        }
        if(results[1].label == "raiva")
        {
            document.getElementById("updateEmoji2").innerHTML ="&#128548;";
        }
    
    }
}






   
        
        
        
        
        
    