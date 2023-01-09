function getData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        updatePage(data);
      }
    };
    xhr.open("GET", "data.json", true);
    xhr.send();
  }
  
  function updatePage(data) {
    var div = document.getElementById("data");
    div.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
      div.innerHTML += "<p>" + data[i].name + "</p>";
    }
  }
  
  setInterval(function() {
    console.log("Hello");
  }, 3000);
  
  setTimeout(function() {
    console.log("Hello");
  }, 3000);
  
  var newElement = document.createElement("p");
  newElement.innerHTML = "Hello, World!";
  document.body.appendChild(newElement);
  
  var button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    console.log("Button clicked");
  });
  

  /*
  
    The getData function is defined. This function is responsible for retrieving data from a JSON file.
    A new XMLHttpRequest object is created and stored in the xhr variable.
    A callback function is set up to be executed when the request finishes. 
    This function checks if the request is complete (xhr.readyState == 4) and successful (xhr.status == 200). 
    If both conditions are true, the JSON data is parsed and passed to the updatePage function.
    
    The request is opened and sent.
    The updatePage function is defined. This function updates the page with the data passed to it.
    The div element with the "data" id is retrieved.
    The contents of the div are cleared.
    A loop iterates through the data and adds a paragraph element for each item.
    An interval is set up to log "Hello" to the console every 3 seconds.
    A timeout is set up to log "Hello" to the console after 3 seconds.
    A new paragraph element is created and its inner HTML is set to "Hello, World!".
    The new element is appended to the body of the page.
    The button element with the "myButton" id is retrieved.
    A click event listener is set up for the button. When the button is clicked, it logs "Button clicked" to the console.
  */ 