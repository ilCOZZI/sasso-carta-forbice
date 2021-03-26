        var score = {
            userScore: 0,
            cpuScore:0
        }

    	var userPick;
    	var cpuPick;

        var allOption = [
            {
                name:"sasso",
                image:"assets/sasso.png"
            },
            {
                name:"carta",
                image:"assets/carta.png"
            },
            {
                name:"forbice",
                image:"assets/forbice.png"
            }
        ]

    	var possibleUserPicks = document.getElementsByClassName("user-choice");

    	for (var i = 0; i < possibleUserPicks.length; i++) {
   		possibleUserPicks[i].addEventListener('click', onUserPick);
        }

        function onUserPick(){
            UserPick = this.dataset.name;
            generateCpuPick();

            var cpuPickImage = "<img src='" + cpuPick.image + "'/>";
            var cpuPickText = "<h3>" + cpuPick.name + "</h3>";

            document.getElementById("user-choice").innerHTML  = cpuPickImage + cpuPickText;
            document.getElementById("result").innerHTML = checkWhoWon();
            document.getElementById("player-score").innerHTML = score.userScore;
            document.getElementById("cpu-score").innerHTML = score.cpuScore;
        }

    	function generateCpuPick(){
    		cpuPick = allOption[Math.floor(Math.random() * allOption.length)];
    	}


    	function checkWhoWon(){

    	if (userPick == cpuPick.name) {
    		 return"hai pareggiato!";
    	} else {


    		if (userPick == "sasso"){
    			if (cpuPick.name == "forbice") {
                    score.userScore++;
    				 return"hai vinto :)";
                     score.cupScore++;
    			} else{
    				 return"hai perso :(";
    			}
    		} 
            
            if (userPick == "carta"){
                score.userScore++;
                if (cpuPick.name == "sasso") {
                     return"hai vinto :)";
                     score.cpuScore++;
                } else{
                     return"hai perso :(";
                }


            }

            if (userPick == "forbice"){
                score.userScore++;
                if (cpuPick.name == "carta") {
                     return"hai vinto :)";
                     score.cpuScore++;
                } else{
                     return"hai perso :(";
    			}	
    		}
    	}
    }