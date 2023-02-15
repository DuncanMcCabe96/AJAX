function getMsg() {

    //STEP 1: setup the xml http request object
    var ajaxRequest = new XMLHttpRequest();

    //Get input value of name to diplay to user after request as been made
    let inputVal = document.getElementById("fullName").value;

    //Function to display user input value once request has been recieved
    ajaxRequest.onload = function () {
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }

    //STEP 2: prepare the open ajax request
    ajaxRequest.open('GET', 'response.html');

    //STEP 3: define the ajax response callback method
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }
    ajaxRequest.send();
}