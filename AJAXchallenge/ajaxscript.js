function getMsg(){
    //step 1:set up the XML HTTP Request object

    let ajaxRequest = new XMLHttpRequest();

    //Get input value of the display to use after request has been made
    let inputVal = document.getElementById("fullName").value;

    //function to display user input value once request has been recieved
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " +
        inputVal + " for signing up!"; 
    }

    //STEP 2: Prepare the type of request and what to request from the server
    ajaxRequest.open('GET','reponse.html', true);

    //STEP 3: defines the AJAX response calback method that establishes whether the response was succesful and where 
    //the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this,readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML=ajaxRequest.responseText;
        }
    }

    //STEP 4: Send the request
    ajaxRequest.send();
}