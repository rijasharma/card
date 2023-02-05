document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");

    const targetCard = { "id": document.getElementById("img-2") }
    let cardCount = 51;


    let box1 = [];
    let box2 = [];
    let box3 = [];
    let box4 = [];
    let top1 = top2 = top3 = top4 = 0;

    const myCards = [
        {
            name: "a1",
            img: "a1.png",
            value: 1
        },
        {
            name: "a1",
            img: "a1.png",
            value: 1
        },
        {
            name: "a1",
            img: "a1.png",
            value: 1
        },
        {
            name: "a1",
            img: "a1.png",
            value: 1
        },

        {
            name: "2a",
            img: "2a.png",
            value: 2
        },
        {
            name: "2a",
            img: "2a.png",
            value: 2
        },
        {
            name: "2a",
            img: "2a.png",
            value: 2
        },
        {
            name: "2a",
            img: "2a.png",
            value: 2
        },


        {
            name: "3a",
            img: "3a.png",
            value: 3
        },
        {
            name: "3a",
            img: "3a.png",
            value: 3
        },
        {
            name: "3a",
            img: "3a.png",
            value: 3
        },
        {
            name: "3a",
            img: "3a.png",
            value: 3
        },

        {
            name: "4a",
            img: "4a.png",
            value: 4
        },
        {
            name: "4a",
            img: "4a.png",
            value: 4
        },
        {
            name: "4a",
            img: "4a.png",
            value: 4
        },
        {
            name: "4a",
            img: "4a.png",
            value: 4
        },
        {
            name: "5a",
            img: "5a.jpg",
            value: 5
        },
        {
            name: "5a",
            img: "5a.jpg",
            value: 5
        },
        {
            name: "5a",
            img: "5a.jpg",
            value: 5
        },
        {
            name: "5a",
            img: "5a.jpg",
            value: 5
        },
        {
            name: "6a",
            img: "6a.jpg",
            value: 6
        },
        {
            name: "6a",
            img: "6a.jpg",
            value: 6
        },
        {
            name: "6a",
            img: "6a.jpg",
            value: 6
        },
        {
            name: "6a",
            img: "6a.jpg",
            value: 6
        },
        {
            name: "7a",
            img: "7a.png",
            value: 7
        },
        {
            name: "7a",
            img: "7a.png",
            value: 7
        },
        {
            name: "7a",
            img: "7a.png",
            value: 7
        },
        {
            name: "7a",
            img: "7a.png",
            value: 7
        },
        {
            name: "8a",
            img: "8a.png",
            value: 8
        },
        {
            name: "8a",
            img: "8a.png",
            value: 8
        },
        {
            name: "8a",
            img: "8a.png",
            value: 8
        },
        {
            name: "8a",
            img: "8a.png",
            value: 8
        },
        {
            name: "9a",
            img: "9a.jpg",
            value: 9
        },
        {
            name: "9a",
            img: "9a.jpg",
            value: 9
        },
        {
            name: "9a",
            img: "9a.jpg",
            value: 9
        },
        {
            name: "9a",
            img: "9a.jpg",
            value: 9
        },
        {
            name: "10a",
            img: "10a.png",
            value: 10
        },
        {
            name: "10a",
            img: "10a.png",
            value: 10
        },
        {
            name: "10a",
            img: "10a.png",
            value: 10
        },
        {
            name: "10a",
            img: "10a.png",
            value: 10
        },
        {
            name: "jack",
            img: "jack.jpg",
            value: 10
        },
        {
            name: "jack",
            img: "jack.jpg",
            value: 10
        },
        {
            name: "jack",
            img: "jack.jpg",
            value: 10
        },
        {
            name: "jack",
            img: "jack.jpg",
            value: 10
        },
        {
            name: "king",
            img: "king.png",
            value: 10
        },
        {
            name: "king",
            img: "king.png",
            value: 10
        },
        {
            name: "king",
            img: "king.png",
            value: 10
        },
        {
            name: "king",
            img: "king.png",
            value: 10
        },
        {
            name: "queen",
            img: "queen.jpg",
            value: 10
        },
        {
            name: "queen",
            img: "queen.jpg",
            value: 10
        },
        {
            name: "queen",
            img: "queen.jpg",
            value: 10
        },
        {
            name: "queen",
            img: "queen.jpg",
            value: 10
        },
    ]

    myCards.sort(() => 0.5 - Math.random());

    function start() {
        document.querySelector(".card-text").innerHTML = cardCount;
        let currentCard = "images/" + myCards[myCards.length - 1].img;
        let currentCardName = myCards[myCards.length - 1].name;
        let currentCardValue = myCards[myCards.length - 1].value;

        console.log(currentCard);
        // targetCard.setAttribute("src", currentCard) ;

        targetCard.id.src = currentCard;
        targetCard["name"] = currentCardName;
        targetCard["img"] = currentCard;
        targetCard["value"] = currentCardValue;
        console.log(targetCard);

        myCards.pop();

        cardCount--;
        console.log(myCards.length);

    }
    start()


    for (let i = 1; i <= 4; i++) {
        document.getElementById(i).addEventListener("click", dynamicCards);
        // document.getElementById(i).addEventListener("click", start)

    }

    // start()

    function boxClick() {
        console.log("box clicked");

    }


    function dynamicCards() {
        let score1 = 0;
        let score2 = 0;
        let score3 = 0;
        let score4 = 0;

        let myId = this.id;


        let newCard = document.createElement("img");
        newCard.src = targetCard.id.src;
        newCard.classList.add("card-img");
        newCard.style.height = 30 + "%";

        if (this.id == 1) {
            newCard.style.top = top1 + "px";
            top1 -= 65;
            box1.push({ "img": targetCard.img, "value": targetCard.value });
            console.log(box1);

            for (let i = 0; i < box1.length; i++) {
                score1 += box1[i].value;
            }
            document.getElementById("score" + myId).innerHTML = score1;

            if (box1.length > 4 || score1 >= 21) {
                box1 = [];
                
                while (this.firstChild) {
                 let child = this.removeChild(this.lastChild);
                 child.style.display = "none";
                 
                }
                
            }
        }

        else if (this.id == 2) {
            newCard.style.top = top2 + "px";
            top2 -= 65;
            box2.push({ "img": targetCard.img, "value": targetCard.value });
            console.log(box2);

            for (let i = 0; i < box2.length; i++) {
                score2 += box2[i].value;
            }
            document.getElementById("score2").innerHTML = score2
        }

        else if (this.id == 3) {
            newCard.style.top = top3 + "px";
            top3 -= 65;
            box3.push({ "img": targetCard.img, "value": targetCard.value });
            console.log(box3);

            for (let i = 0; i < box3.length; i++) {
                score3 += box3[i].value;
            }
            document.getElementById("score3").innerHTML = score3
        }

        else {
            newCard.style.top = top4 + "px";
            top4 -= 65;
            box4.push({ "img": targetCard.img, "value": targetCard.value });
            console.log(box4);

            for (let i = 0; i < box4.length; i++) {
                score4 += box4[i].value;
            }
            document.getElementById("score4").innerHTML = score4
        }


        this.appendChild(newCard);
        start();
    }

})