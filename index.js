const diceeNumber1 = Math.floor(Math.random() * 6) + 1;
const randomImage = "dice" + diceeNumber1 + ".png ";
const randomSource = "images/" + randomImage;
const firstImage = document.querySelectorAll("img");
      firstImage[0].setAttribute("src", randomSource);
const secondImage = document.querySelectorAll("img");
      secondImage[1].setAttribute("src", randomSource);


      const diceeNumber2 = Math.floor(Math.random() * 6) + 1;
      const randomImage2 = "dice" + diceeNumber2 + ".png ";
      const randomSource2 = "images/" + randomImage2;
      const secondtImage = document.querySelectorAll("img");
            secondImage[1].setAttribute("src", randomSource2);
      
    if(diceeNumber1 > diceeNumber2){
      document.querySelector("h1").innerText = "Play One has won";
    } else if(diceeNumber2 > diceeNumber1){
      document.querySelector("h1").innerText = "Play Two has won";
    } else {
      document.querySelector("h1").innerText = "Draw";
    }
