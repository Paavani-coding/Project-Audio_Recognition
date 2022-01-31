//https://teachablemachine.withgoogle.com/models/2vTRMXfmG/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kBxIS6ArH/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}