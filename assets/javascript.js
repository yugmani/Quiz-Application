var questions = [ 
    {challenge: "What is NOT one the types of Pop up boxes available in JavaScript?",
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

    {challenge: "Which of the following Boolean operators can be used for AND.",
    choices:["||", "!=", "&&", "++"],
    answer:"&&"
    },

    {challenge: "CSS stands for ______________.",
    choices:["Core Style Sheet", "Cascade Style Sheet", "Cascade Share Sheet", "Crystal Style Sheet"],
    answer:"Cascade Style Sheet"
    },

]


var checkedButton = "";
var ansNum = 0;
var scoreUser = 0;
var ind = 0;
var count = 0;
questionTime = 0;
var TIMER;

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




tagDiv.style.display = "none";
startDiv.addEventListener("click", function(){

    startDiv.style.display = "none";
    
    counterTime();
    appTag.textContent = "Quiz Application";
    tagDiv.append(appTag);

    generateQuestion ();
    TIMER = setInterval(counterTime, 1000); 
    //finalResult();
    // timerTag.innerHTML = scoreUser;
    // radioDiv.append(timerTag);
         
    });


function generateQuestion() {

    tagDiv.style.display = "block";
    // appTag.textContent = "Quiz Application";
    // tagDiv.append(appTag);
    
    checkedButton = "";
    ansNum = 0;
    //scoreUser = 0;

   // counterTime();

    radioDiv.textContent = "    "+ (ind+1)+". " + questions[ind].challenge;
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
        
    
    // Adding eventlistener when user click the button. 
      

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
                                    //alert("Wrong! ");
                                    }
                                   timerTag.innerHTML = "SCORE: "+ scoreUser;
                                   scorePercent = 100*(scoreUser / 50);
                                   radioDiv.append(timerTag);
                        }   
                        
                        
             
                }

                
                    ind = ind +1;

                    
                    finalResult();
                    generateQuestion(ind);
                    

            }); // eventlistener closed here; 

             
        }
            
            var pDiv = document.createElement("p")
            radioDiv.appendChild(pDiv);
            
            
           // finalResult();
}
    


function counterTime() {
    if (count > questionTime){
        counter.innerHTML = count;
        radioDiv.append(counter);
        count--;
    }
    

    else {
        // ind = ind +1;
        // finalResult(); 
        // generateQuestion(ind);
        count = 10;
    }

    
}
        
         
function finalResult () {
    if (ind > 4) {
        tagDiv.style.display = "none";
        radioDiv.style.display = "none";
        appTag.style.display =  "none";
        startDiv.style.display= "none";
        
        timerTag.innerHTML = "SCORE: "+ scorePercent + "%";
        tagDiv.append(timerTag);

        

        var inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("name", "Fname");
        inputName.setAttribute("placeholder", "Name ");
        tagDiv.append(inputName);
       
        var paDiv = document.createElement("p")
        tagDiv.appendChild(paDiv);
        
        var inputInitial = document.createElement("input");
        inputInitial.setAttribute("type", "text");
       // inputInitial.setAttribute("id", "ant");
        inputInitial.setAttribute("name", "initial");
        inputInitial.setAttribute("placeholder", "Initial");
        tagDiv.append(inputInitial);

        var pasDiv = document.createElement("p")
        tagDiv.appendChild(pasDiv);

        var inputSubmit = document.createElement("input");
        inputSubmit.setAttribute("type", "submit");
        inputSubmit.setAttribute("name", "sub");
        inputSubmit.setAttribute("placeholder", "Send");
        tagDiv.append(inputSubmit);

        inputSubmit.addEventListener("click", function(){
            alert ("Thank you for participating in quiz!")
             var scoreStorage = document.querySelector("#timerTag");
        
            // var scoreUser = localStorage.getItem("scoreUser");
    
            scoreStorage.textContent = scoreUser;
    
            localStorage.setItem("Score", scoreUser);

        var inTake = document.getElementsByName("initial");
        inTake.textContent = initial;
        localStorage.setItem("Initial", initial);
       


        })
    
    }
}
        
        





