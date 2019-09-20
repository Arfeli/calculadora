
window.onload = function (){
  let firstValue
  let secondValue
  let selectedOperator
  let mMas,mMes = 0


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
  const btnMm = document.getElementById('btnMm')

const numberOnclick = function(event) {
  display.innerText += event.target.textContent
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
    const options ={
      baseURL:"http//localhost:3000/",
      timeout: 5000,
      method: "GET",
      header: {
        "content-Type": "application/json",
      }
    }
    fetch(`http://localhost:3000/getresult/${firstValue}/${secondValue}/${selectedOperator}`, options)
    .then(res => res.json())
    .then((response)=>{
      console.log(response)
      display.innerText = response.result
    })

    secondValue = parseFloat(display.innerText)



  

    btnMm.onclick = function(){


      mMas = parseFloat(display.innerText)
      console.log('vale esto: ' + mMas)
      // if(btnIg.onclick){
      //   result = mMas + parseFloat(display.innerText)
      //   console.log(result)
      // }


      }




    btnMi.onclick = function(){
      let restatoria
      mMes = parseFloat(display.innerText)
      console.log(mMes)
      restatoria = mMes + mMes
      display.innerText = restatoria
      console.log(restatoria)
      }

    btnMc.onclick = function(){
      mMes = 0;
      mMas = 0;
      sumatoria = 0;
      restatoria = 0;
      console.log('borrado en +: ' + mMas)
      console.log('borrado en -: ' + mMes)
      console.log('borrado en sumado ' + sumatoria)
      console.log('borrado en restado ' + restatoria)
      }

  }
}
