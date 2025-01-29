cards = document.querySelectorAll('.evenvement');

function myFunction(card) {
  card.addEventListener("click", function () {
    tableauDetail = card.querySelector('.exEvenement')
    tableauImg = card.querySelector('.concerteImg')
    tableauDetail.classList.toggle("animEvenement");
    
  })


}
cards.forEach(myFunction);