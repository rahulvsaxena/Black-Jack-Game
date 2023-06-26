let messg=document.getElementById("message")
let sumOfCards=0
let displayCards=document.getElementById("card-el")
let count=0

function newCard(){
    if(sumOfCards<21||count<3){
        count++
        let newCard=randomCard()
        displayCards.textContent+=newCard+" "
        sumOfCards+=newCard
        let sum=document.getElementById("sum-el")
        sum.textContent="Sum: "+sumOfCards
    }
    else if(sumOfCards===21){
        messg.textContent="You Won"
    }
    else{
        messg.textContent="You Lose"
    }
}

function randomCard(){
    let card=Math.floor(Math.random()*13)+1
    if(card===1){return 11}
    else if(card>10) {return 10}
    else {return card}
}

// let result =sumNum(5,10)
// console.log(result)
// function sumNum(a,b) {return a+b}

// let num=Math.floor(Math.random()*6)
// console.log(num)