Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){ 
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NNv4FNJWV/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
    if (error){
        console.error(error);
    } else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        if(result[0].label == "rock"){
            document.getElementById("update_emoji1").innerHTML = "&#9996";
        }
        if(result[0].label == "peace"){
            document.getElementById("update_emoji1").innerHTML = "&#128076";
        }
        if(result[0].label == "rock on"){
            document.getElementById("update_emoji1").innerHTML = "&#129304";
        }
        if(result[1].label == "rock"){
            document.getElementById("update_emoji1").innerHTML = "&#9996";
        }
        if(result[1].label == "peace"){
            document.getElementById("update_emoji1").innerHTML = "&#128076";
        }
        if(result[1].label == "rock on"){
            document.getElementById("update_emoji1").innerHTML = "&#129304";
        }
    }
}