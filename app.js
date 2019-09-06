
window.onload = function (){
  let firstValue
  let secondValue
  let selectedOperator

  const display = document.getElementById('display')
  const btnOne = document.getElementById('btnOne')
  const btnNin = document.getElementById('btnNin')
  const btnEig = document.getElementById('btnEig')
  const btnSev = document.getElementById('btnSev')
  const btnSix = document.getElementById('btnSix')
  const btnFiv = document.getElementById('btnFiv')
  const btnFou = document.getElementById('btnFou')
  const btnTre = document.getElementById('btnTre')
  const btnTwo = document.getElementById('btnTwo')
  const btnZer = document.getElementById('btnZer')
  const btnP = document.getElementById('btnP')
  const btnRes = document.getElementById('btnRes')
  const btnD = document.getElementById('btnD')
  const btnAs = document.getElementById('btnAs')
  const btnIg = document.getElementById('btnIg')

const numberOnclick = function(event) {
  display.innerText = event.target.textContent
}
  btnOne.onclick = numberOnclick
  btnTwo.onclick = numberOnclick
  btnTre.onclick = numberOnclick
  btnFou.onclick = numberOnclick
  btnFiv.onclick = numberOnclick
  btnSix.onclick = numberOnclick
  btnSev.onclick = numberOnclick
  btnEig.onclick = numberOnclick
  btnNin.onclick = numberOnclick
  btnZer.onclick = numberOnclick

  btnC.onclick = function(){
    display.innerText = ""
  }

  const operatorFunction = function(event){
    firstValue = parseFloat(display.innerText)
    display.innerText = ""
    selectedOperator = event.target.textContent
    }

  btnD.onclick = operatorFunction
  btnAs.onclick = operatorFunction
  btnRes.onclick = operatorFunction
  btnP.onclick = operatorFunction

  btnIg.onclick = function(){
    secondValue = parseFloat(display.innerText)
    let result
    switch (selectedOperator) {
      case '+':
        result = firstValue + secondValue
        break;
      case '-':
        result = firstValue - secondValue
        break;
      case '*':
        result = firstValue * secondValue
        break;
      case '/':
        result = firstValue / secondValue
        break;
      default:
    }

    display.innetText = result
  }
}
