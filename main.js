var txtInput = document.querySelector(".textArea");
var btn = document.querySelector("#btn-translate");
var outputDiv = document.querySelector(".outputDiv");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert('Something has gone wrong')
}

function clickHandler() {
    //taking input
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btn.addEventListener("click", clickHandler)


