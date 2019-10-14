
// Array for questions, choices and correct answers.
var questions = [ 
    {challenge: "Which is NOT one of the types of Pop up boxes available in JavaScript?",
    choices:["Alert", "Boolean", "Prompt",  "Confirm"],
    answer:"Boolean"
    },

    {challenge: "What is the use of Push method in JavaScript?",
    choices:["Append", "Remove", "Replace", "Alert"],
    answer:"Append"
    },

    {challenge: "JavaScript is developed by ____________ .",
    choices:["Twitter", "Microsoft", "Google", "Netscape"],
    answer:"Netscape"
    },

    {challenge: "Which of the following is Boolean operators that can be used for AND.",
    choices:["||", "!=", "&&", "++"],
    answer:"&&"
    },

    {challenge: "CSS stands for ______________.",
    choices:["Core Style Sheet", "Cascade Style Sheet", "Cascade Share Sheet", "Crystal Style Sheet"],
    answer:"Cascade Style Sheet"
    },

]

// variable declarations. 
var checkedButton = "";
var ansNum = 0;
var scoreUser = 0;
var ind = 0;
var count = 10;
questionTime = 0;
scorePercent = 0;
var TIMER;
var inIt = "";
var usN = "";

var startDiv = document.createElement("div");
startDiv.setAttribute("class", "start");
startDiv.textContent = "START";
document.body.append(startDiv);

var tagDiv = document.createElement("div");
tagDiv.setAttribute("class", "container");
document.body.appendChild(tagDiv);

var appTag = document.createElement("h4");

var radioDiv = document.createElement("form");
radioDiv.setAttribute("class", "content");
radioDiv.setAttribute("name", "quiz");

var pTag = document.createElement("p");

var counter = document.createElement("div");
counter.setAttribute("class", "dutt");

var timerTag = document.createElement("div");
timerTag.setAttribute("class", "gutt");

var finalDiv = document.createElement("div");
finalDiv.setAttribute("class", "container")



// to start quiz and generate questions. 
tagDiv.style.display = "none";
startDiv.addEventListener("click", function(){

    startDiv.style.display = "none";
    
    
    appTag.textContent = "CODE QUIZ";
    tagDiv.append(appTag);

    generateQuestion ();
    counterTime();
    TIMER = setInterval(counterTime, 1000); 
    
         
    });

// function to generate questions. 
function generateQuestion() {

    tagDiv.style.display = "block";
    
    checkedButton = "";
    ansNum = 0;
    
    radioDiv.textContent = "    " + (ind+1)+". " + questions[ind].challenge;
    tagDiv.append(radioDiv);

    radioDiv.append(pTag);
    
    //creating radio buttons with answers to choose.
    for (var k=0; k<4; k++) {
        var pDiv = document.createElement("p");
        radioDiv.append(pDiv);

        var inputEl= document.createElement("input");
        inputEl.setAttribute("type", "radio");
        inputEl.setAttribute("name", "rocket");
        inputEl.setAttribute("class", "core");
        
        
        radioDiv.append(inputEl);
        

        var labelEl = document.createElement("label");
        labelEl.innerHTML = questions[ind].choices[k];
        radioDiv.append(labelEl);
        
               
       }
        
     
    
       // Adding eventlistener when user clicks the button to choose the answer. 
     
       var items = document.querySelectorAll(".core");
       for (var j = 0; j< items.length; j++) {
           var it = items[j];
           
           it.addEventListener("click", function(){ 
            
            count = 10;
            var joker = document.getElementsByName("rocket");
           
            //Accessing user answer. 
                for (var m=0; m<joker.length; m++) {
                 
                        var divLast= document.createElement("div");
                        divLast.setAttribute("id", "result");
                    
                        radioDiv.append(divLast);
                       
                    
                        if (joker[m].checked) {
                        
                                checkedButton = joker[m].value;
                                ansNum = m;
                                
                                //comparing user answer and correct answer.
                                if (questions[ind].choices[ansNum] == questions[ind].answer) {
                                    const scoreNew = 10;
                                    scoreUser = scoreUser + scoreNew;
                                   
                                }
        
                                else {
                                     
                                    }
                                   timerTag.innerHTML = "SCORE: "+ scoreUser;
                                   scorePercent = 100*(scoreUser / 50);
                                   radioDiv.append(timerTag);
                        }   
                        
                        
             
                }

                // to access next question. 
                    ind = ind +1;
                   
                    finalResult();
                  
                    generateQuestion(ind);
                   
                   
            }); // eventlistener closed here; 
            
            
             
        }
            
            var pDiv = document.createElement("p")
            radioDiv.appendChild(pDiv);
                 
}
    

// function to generate countdown timer.
function counterTime() {
    
    if (count > questionTime){
        counter.innerHTML = count;
        appTag.append(counter);
        count--;
    }
    

    else {
        
        count = 10;
    }

    if (count < 1 && ind <= 4 ){
        
        ind = ind +1;
        
        finalResult();
        generateQuestion();
        }
        

        
    } 
    
//}
        

// function to display final score.
function finalResult () {
    if (ind > 4) {
        tagDiv.style.display = "none";
        radioDiv.style.display = "none";
        appTag.style.display =  "none";
        startDiv.style.display= "none";
        
        
        tagDiv.append(timerTag);
       
        var inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("class", "ant");
        inputName.setAttribute("name", "fName");
        inputName.setAttribute("placeholder", "Name ");
        tagDiv.append(inputName);
       
        var paDiv = document.createElement("p")
        tagDiv.appendChild(paDiv);
        
        var inputInitial = document.createElement("input");
        inputInitial.setAttribute("type", "text");
        inputInitial.setAttribute("class", "ant");
        inputInitial.setAttribute("name", "initial");
        inputInitial.setAttribute("placeholder", "Initial");
        tagDiv.append(inputInitial);

        var pasDiv = document.createElement("p")
        tagDiv.appendChild(pasDiv);

        var inputSubmit = document.createElement("input");
        inputSubmit.setAttribute("type", "submit");
        inputSubmit.setAttribute("name", "sub");
       
        
        tagDiv.append(inputSubmit);
       
        
        timerTag.innerHTML = "SCORE: "+ scorePercent + "%";
        
       //to generate registration form
       inputSubmit.addEventListener("click", function(event){
                event.preventDefault();
                
                
                var initial = document.getElementsByName("initial");
                var userName = document.getElementsByName("fName");
                inIt = initial[0].value;
                usN = userName[0].value;
               
                // console.log(inIt);
                // console.log(usN);
            
                if ( inIt === "" || usN === ""){
                    
                    showMessage("Error ! Name/Initial cannot be blank!");
                    return;
                }
                
                // LOCAL STORAGE PART
                else {
                   
                    showMessage("Success! You are Registered successfully. Thank you for participating in the Quiz.")
                    localStorage.setItem("Name", usN);
                    localStorage.setItem("SCORE:", scorePercent);
                    localStorage.setItem("Initial", inIt);

                    
                }

             });
                
        
    }
    }
        

// Function to generate final registration success message.
function showMessage(message) {
    //alert ("Thank you for participating in quiz!");
    tagDiv.style.display = "none";
    radioDiv.style.display = "none";
    appTag.style.display =  "none";
    startDiv.style.display= "none";

    var messDiv = document.createElement("div")
    messDiv.setAttribute("class", "msg");
    
    messDiv.textContent = message;
    
    document.body.append(messDiv);
    
}







