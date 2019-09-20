const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {

  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)
  let result
  switch (req.params.selectedOperator) {
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

  res.send({result : result})
})
 //se le agrega una funcion
app.listen(3000, () => {
  console.log("server corriendo puerto 3000")
})
