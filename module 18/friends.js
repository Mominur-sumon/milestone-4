const myScore  = 71 ;
const myFriendScore = 30;

if(myScore > 80){
    if(myFriendScore > 80){
        console.log("Let's go to the Lunch");
    }else if(myFriendScore >=60 ){
        console.log("Good Luck Next Time");
    }else if(myFriendScore >= 40){
        console.log("You are not my friend");
    }else{
        console.log("I block you");
    }
}else{
    console.log("Go to home and act sad");
}