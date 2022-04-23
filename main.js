const idAdvice = document.querySelector(".title span.advice-id");
const textAdvice = document.querySelector(".advice p.adiviceText");
const diceButton = document.querySelector(".button");



const renderScreen = (data)=>{
    idAdvice.textContent = JSON.stringify(data.slip.id)
    textAdvice.textContent = JSON.stringify(data.slip.advice)
}
const getAdvices = () => {
  const url = "https://api.adviceslip.com/advice";

  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return renderScreen(JSON.parse(request.responseText)) ;
};
getAdvices()

diceButton.addEventListener('click', ()=>{
    diceButton.classList.add('rotate')
    setTimeout(() => {
        diceButton.classList.remove('rotate')
    }, 1000);
    textAdvice.classList.add('show')
    setTimeout(() => {
        textAdvice.classList.remove('show')
    }, 1000);
    getAdvices()
})



