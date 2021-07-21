(No title)
const starCount = 5;

let rating = 0;

const starContainer = document.getElementById("starcontainer");

const emojiContainer = document.getElementById("emojicontainer");

 

document.addEventListener("DOMContentLoaded", function() {

  starContainer.appendChild(addStarToContainer(starCount));

});

 

function addStarToContainer(count) {

  const starFragment = document.createDocumentFragment();

  for(let i = 0; i < count; i++) {

    starFragment.appendChild(createBasicStarElement(i));

  }

  return starFragment;

}

 

function createBasicStarElement(order){

  const starElement = document.createElement("span");

  starElement.addEventListener('click', onclickStar);

  starElement.addEventListener('mouseover', onMouseOver);

  starElement.addEventListener('mouseout', onMouseOut);

  starElement.classList.add("grayStar");

  starElement.dataset.index = order;

  return starElement;

}

 

function onclickStar(element){

   rating = parseInt(element.target.dataset.index)+1;

}

function onMouseOver(element) { 

  let index = parseInt(element.target.dataset.index) + 1;

  //Fill rest of the star

  if(index > rating) {

    for(let i = rating; i < index; i++) {

       fillTheStar(i);

    }

  }

  //Unfill the star

  if(index < rating) {

    for(let i = rating; i > index; i--){

       unFillTheStar(i-1);

    }

  }

  setEmoji(index);

}

function onMouseOut(element){  

  let index = parseInt(element.target.dataset.index) + 1;

  //fill the star

  if(index < rating) {

    for(let i = index; i <= rating; i++){

      fillTheStar(i-1);

    }

   }

  //unfill

   if(index > rating) {

      for(let i = rating; i < index; i++) {

        unFillTheStar(i);

      }

   } 

  setEmoji(rating);

}

 

  function fillTheStar(index) {

    let currentStar = starContainer.children.item(index);

      if(currentStar.classList.contains("grayStar"))

      currentStar.classList.remove("grayStar");

      if(!currentStar.classList.contains("yellowStar"))

      currentStar.classList.add("yellowStar");

  }

 

  function unFillTheStar(index) {

     let currentStar = starContainer.children.item(index);

      if(currentStar.classList.contains("yellowStar"))

      currentStar.classList.remove("yellowStar");

      if(!currentStar.classList.contains("grayStar"))

      currentStar.classList.add("grayStar");

  }

 

// Emoji

function setEmoji(index) { 

 let currentEmoji = emojiContainer.children.item(0); 

  currentEmoji.className = getEmojiForRating(index);

}

function getEmojiForRating(index) {

  const percentage = (100 * index) / starCount;

  if (percentage <= 20) {

    return "worst";

  } else if (percentage <= 40) {

    return "bad";

  } else if (percentage <= 60) {

    return "neutral";

  } else if (percentage <= 80) {

    return "good";

  }else {

    return "best";

  }

 

}
