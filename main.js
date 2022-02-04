


function check(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qfooGpj6L/model.json', model_ready);
    }

    function model_ready() {
        console.log("Model is Ready");
        classifier.classify(got_results);

    }