// rpg-LoveatFirstsight.js

scene1=LoveatFirstsight;

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
	if (answer == "Talk to her") {
		youarebeautiful();
	}
	else if (answer == "keep walking") {
		Playvideogames();
	}
	else if (answer == "Talk with your parents") {
		Talkwithyourparents();
	}
    else if (answer == "Tell her that you like her"){
        Tellherthatyoulikeher();
    }
    else if (answer == "Ask her for a date"){
        Askherforadate();
    }
    else if (answer == "Tell her we should be just a friends"){
        Tellherweshouldbejustafriends();
    }
    else if (answer == "Let her be in your team"){
        Letherbeinyourteam();  
    }
    else if (answer == "don’t let her be in your team"){
        dontletherbeinyourteam();  
    }
    else if (answer == "Go join a new team that you"){
        Gojoinanewteamthatyou();  
    }
    else if (answer == "Go after your dad"){
        Goafteryourdad();  
    }
    else if (answer == "Go after your mom"){
        Goafteryourmom();  
    }
    else if (answer == "Yes I am single"){
        YesIamsingle();  
    }
    else if (answer == "No I am not single"){
        NoIamnotsingle();  
    }
    else if (answer == "The end"){
        end();  
    }
    else if (answer == "Just a friends"){
        Tellherweshouldbejustafriends();  
    }
    else if (answer == "No,It’s just our first date maybe next time"){
        NoItsjustourfirstdatemaybenexttime();  
    }
	else if (answer == "Let her be in your team"){
        Tellherthatyoulikeher();  
    }
	else if (answer == "don't let her be in your team"){
        Tellherweshouldbejustafriends();  
    }
	
}
//1.1 Love at First sight
function LoveatFirstsight() {
	story("You are rich and you have everything you want. Your dad works at the government (though he never said what part of government). Your mom is a teacher at your school. You feel safe and taken care of.\ \nOne day you are walking in the town and see a beautiful girl walking by. You want to talk to her but you are shy person.")
	options = ["Talk to her","keep walking","Talk with your parents"];
	answer = setOptions(options);
}

//1.2 you are beautiful
function youarebeautiful(){  // FIRST SCENE - WELCOMES PLAYER
	story("You going to talk to her. She smiling to your face and she says Hi beautiful, in that point you are shocked because that's your first time someone tell you beautiful. So now you having a beautiful conversation with her");
	options = ["Tell her that you like her"," Ask her for a date","Tell her we should be just a friends"];
	answer = setOptions(options);
}

//1.3 play video games
function Playvideogames() {
	story("You keep walking.  You go into a town and you enter a video game arcade. There is a competition going on at your favorite game, which requires two players on each team. You have no one to play with in the same team, so you ask in a loud voice if anyone wants to be your partner. A girl's voice says, 'Sure!' and you look and see that same girl that you saw in the town.");
	options = ["Let her be in your team","don’t let her be in your team","Go join a new team that you"];
	answer = setOptions(options);
}

//1.4 Talk with your parents
function Talkwithyourparents() {
	story("You have to asked your parents if you should be with her or not, because you don't have enough experience with life, and don't know how to approach someone you don't know. / /nYour father says 'Yes, that's my son. You should talk to her and have fun' But your mother says 'No, you should be careful. Ask your friends about her, and you should be just friend with her don't be close to her so fast.");
	options = ["Go after your dad","Go after your mom",];
	answer = setOptions(options);
}

//1.5 Tell her that you like her
function Tellherthatyoulikeher() {
	story("It is a beautiful day, and you want to ask her to hangout to have fun. So you decided that you want to go to the movie theater with her. So she said yes sure I love to go out with you. You are going to the movie theater together. So you paid everything just to show that you care about her. After the movie she asking you a question 'Are you single?'.")
	options = ["Yes I am single","No I am not single"];
	answer = setOptions(options);
}

//1.6 Ask her for a date
function Askherforadate() {
	story("It's Monday morning, you going to school and the first class you have is Math. You are entering now the class and you saw the same a girl that you met in the town when you went for a walk. You set next to her and you are talking to her now. The teacher gave a homework and that homework is hard but you know how to do it and she is not. So she asking you for help and of course you said yes. After you helped her with a homework you ask her for a date 'would you like maybe go to movie theater sometimes?' she respond 'I'll say yes if you let me pay for it otherwise I will say no ha-ha' and you said 'whatever you say princess'. After the movie theater she asking you if it's okay to kiss you.")
	options = ["No,It’s just our first date maybe next time","Yes I mean why not"];
	answer = setOptions(options);
}

//1.7 Tell her we should be just a friends
function Tellherweshouldbejustafriends(){  
	story("You are walking with her at the town. She asking you if you want to be her boyfriend but you not sure if you want that to happen, so you told her we should be friends first so we know each other better. She didn't like what you said you can feel it, but you feel that the right thing to say. The end of the story");
	options = ["The end"];
	answer = setOptions(options);
}

//1.8 Let her be in your team
function Letherbeinyourteam(){  
	story("You went to play a video game and she is with you in the team. You are excited to be with her. She said 'You look good at this game' and you said 'Thanks but I didn't play this game for a long time ha-ha' she said 'Let's win this no matter what'. In the end you and she won the competition she said 'I don't know how we did it but we won ha-ha' You said 'we won because we made a great camaraderie'");
	options = ["Tell her that you like her"];
	answer = setOptions(options);
}

//1.9 don't let her be in your team 
function dontletherbeinyourteam(){  
	story("You are going to play a video game and you don't want her to be with your team at all, because you don't want to have feeling for her. You are talking to yourself saying that 'oh hell no I'm not going to let her be in my team at all, you not ready for a relationship.'");
	options = ["Just a friends"];
	answer = setOptions(options);
} 

//1.10 Go join a new team
function Gojoinanewteamthatyou(){  
	story("You are going to join a team so you don't have to see the girl that I like, but you are not good working with people that you don't know. So you tried to introduce yourself so at least we know each other names. So we starting the competition and your team starting speaking different language then me, so we didn't win because we didn't work as team.'");
	options = [""];
	answer = setOptions(options);
}

//1.10 Go join a new team
function Goafteryourdad(){  
	story("You are going to talk to her, and she is smiling to your face and she says 'Hi beautiful', in that point you are shocked because that's your first time someone tell you beautiful. So now you having a beautiful conversation with her. You want to ask her a question. Choose the question you want to ask her.");
	options = ["Where does your dad work?","What do you like to do for fun?"];
	answer = setOptions(options);
}

//1.12 Go after your mom
function Goafteryourmom(){  
	story("You are thinking about what your mom said about that you should be safe better than having fun and in the end she going to hurt you. You are sitting in your room and your mom comes to your room and she said 'I think you should be just friend in the begging to know her better, and if you don't like what I think do whatever you want because it's your life. My job is to advice you and in the end it's your choice.'");
	options = ["Ask her for a date","Tell her we should be just a friends"];
	answer = setOptions(options);
}

//1.13 Yes I am single
function YesIamsingle(){  
	story("You say 'Yes I'm single and I'm looking for a queen. So do you think that one day we'll be together?' and she said 'Yes we will' she said and that day will come soon. You told her 'you know, last year I thought that I would never meet the girl that I would want to be with for the rest of my life. 'So in the end of the day you going home and you are thinking about how you feel about her but you didn't really like her so decided to tell her we should be a friend that will be better for everyone");
	options = ["Just a friends"];
	answer = setOptions(options);
}

//1.14 No I am not single
function NoIamnotsingle(){  
	story("You tell her \'I'm not sure because I'm kinda talking to someone else, but I'm not sure if she is the right girl.'\ We are talking a lot so hopeful we work things out. I'm thinking we should just be friends.");
	options = ["Tell her we should be just a friends"];
	answer = setOptions(options);
}

//1.15 No, It's just our first date maybe next time
function NoItsjustourfirstdatemaybenexttime(){
	story("You said 'we should know each other better' she said 'you are right actually'. After that night you thinking about tell her that we should be friends.");
	options = ["Just a friends"];
	answer = setOptions(options);
}

//1.16 end
function end(){
	story("Thanks for reading my story!!");
	options = [""];
	answer = setOptions(options);
}







 







