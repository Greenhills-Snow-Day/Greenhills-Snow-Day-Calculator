const button = document.getElementById("button");
button.addEventListener("click", calculate);


function calculate() {
          var select = document.getElementById("school");
          var selectedOption = select.options[select.selectedIndex]; 
          if (selectedOption.text == "Greenhills") {
                    
                    bar()
          }
}
function bar(){
          var width = 0;                  //  set your counter to 1
          document.getElementById("bar").style.visibility = "unset";
          function myLoop() {         //  create a loop function
                    setTimeout(function() {   //  call a 3s setTimeout when the loop is called  //  your code here
                              width+=0.1; 
                              if (width > 19 & width <21){
                                        document.getElementById("updates").innerHTML = "Gathering Snow Data..."
                              }
                              else if (width > 39 & width <41){
                                        document.getElementById("updates").innerHTML = "Hacking Into Greenhills School..."
                              } 
                              else if (width > 59 & width <61){
                                        document.getElementById("updates").innerHTML = "Retrieving Snow Day Info..."
                              } 
                              else if (width > 79 & width <81){
                                        document.getElementById("updates").innerHTML = "Finding Percentage..."
                              } 
                              else if (width > 99){
                                        document.getElementById("updates").innerHTML = "Success"
                              }             //  increment the counter
                              if (width <= 100) {
                                        document.getElementById("progress-bar").style.width = width.toString() + "%"           //  if the counter < 10, call the loop function
                                        myLoop();             //  ..  again which will trigger another 
                              }
                              else{
                                        document.getElementById("percent").innerHTML = "0% Chance"
                              }
                                                    //  ..  setTimeout()
                    }, 10)
                    
          }

          myLoop();  
}
          


