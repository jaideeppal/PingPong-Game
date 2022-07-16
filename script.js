var paddleHeight=150;
var paddleWidth=20;
var ballRadius=25;

var halfpaaddleHeight=paddleHeight/2;

var speedPaddle1=0;
var speedPaddle2=0;

var positionOfpaddle1=220;
var positionOfpaddle2=220;

var topPositionOfball=300; 

var leftPositionOfball=670;

var topSpeedOfball=0;

var leftSpeedOfball=0;

var score_1=0;
var score_2=0;

var speed=5;
window.alert("Hey!! Need some CHILDHOOD STUFF?? Welcome to Ping_PonG 2020! Edition. Use W & S (player 1) and UP & DOWN buttons (player 2) for CONTROLS! Warning:Speed changes abruptly! Play Accordingly!  Press *ENTER* to start!");

// this is a two player game
// w s for up down of first player
// up down keys for second player controls


// movement of paddle
document.addEventListener('keydown',function(e){

	if(e.keycode == 13 || e.which==13)
	{

        score_1=0;
	    score_2=0;
		startball();
	}

	// w
	if(e.keycode == 87 || e.which == 87){
		speedPaddle1 =-10;
	}

     // s
	if(e.keycode == 83 || e.which == 83){
		speedPaddle1 = 10;
	}

	// up
	if(e.keycode == 38 || e.which == 38){
		speedPaddle2 =-10;
	}

	// down
	if(e.keycode == 40 || e.which == 40){
		speedPaddle2 =10;
	}
});

// stabalise position
document.addEventListener('keyup',function(e){

	// w
	if(e.keycode == 87 || e.which == 87){
		speedPaddle1 =0;
	}

     // s
	if(e.keycode == 83 || e.which == 83){
		speedPaddle1 = 0;
	}

	// up
	if(e.keycode == 38 || e.which == 38){
		speedPaddle2 =0;
	}

	// down
	if(e.keycode == 40 || e.which == 40){
		speedPaddle2 =0;
	}
});


window.setInterval(function show(){

positionOfpaddle1 += speedPaddle1;
positionOfpaddle2 += speedPaddle2;

// prevent from escaping top
if(positionOfpaddle1 <=1)
{
	positionOfpaddle1=1;
}
if(positionOfpaddle2 <=1)
{
	positionOfpaddle2=1;
}

// prevent from escapin down

if(positionOfpaddle1 >= window.innerHeight -paddleHeight)
{
	positionOfpaddle1=window.innerHeight -paddleHeight;
}
if(positionOfpaddle2 >= window.innerHeight -paddleHeight)
{
	positionOfpaddle2=window.innerHeight -paddleHeight;
}
document.getElementById("paddle-1").style.top= positionOfpaddle1 +"px";
document.getElementById("paddle-2").style.top= positionOfpaddle2 +"px";

// ball events
if(topPositionOfball<=10 || topPositionOfball >= window.innerHeight - ballRadius-10)
{
	topSpeedOfball = -topSpeedOfball;
}
leftPositionOfball = leftPositionOfball+leftSpeedOfball;
topPositionOfball = topPositionOfball+topSpeedOfball;



document.getElementById("ball").style.top= topPositionOfball +"px";
document.getElementById("ball").style.left=leftPositionOfball + "px";

// for the scores
document.getElementById("score1").innerHTML=score_1;
document.getElementById("score2").innerHTML=score_2;


// the main logic #hardest_part

if(leftPositionOfball<= paddleWidth)
{

     if(topPositionOfball>positionOfpaddle1 && topPositionOfball <positionOfpaddle1+paddleHeight)
     {
     	leftSpeedOfball=-leftSpeedOfball;
     }
     else{
     	score_2++;
     	if(score_2 >=5)
     	{
     		speed=6;
     	}

if(score_2 >12)
{
	window.alert("Player 2 Won!! PRESS OK to RESTART");
	score_1=0;
	score_2=0;
}
     	
     	startball();
     }
}

if(leftPositionOfball >= window.innerWidth - ballRadius - paddleWidth)
{


     if(topPositionOfball>positionOfpaddle2 && topPositionOfball <positionOfpaddle2+paddleHeight)
     {
     	leftSpeedOfball=-leftSpeedOfball;
     }
     else{
     	score_1++;
     	if(score_1 >=5)
     	{
     		speed=6;
     	}
     	if(score_1 >12)
{
	window.alert("Player 1 Won!! Press OK To RESTART!!");
	score_1=0;
	score_2=0;
}

     	
     	startball();
     }

}


},1000/60);



// for the ball movememnt

function startball(){

topPositionOfball=300; 
leftPositionOfball=655;
// var side=-1;
if(Math.random()<0.5)
{
	var side=1;
}else{
	var side=-1;

}

leftSpeedOfball= side* (Math.random()*5+speed);

topSpeedOfball= side*(Math.random()*5+speed);
}

