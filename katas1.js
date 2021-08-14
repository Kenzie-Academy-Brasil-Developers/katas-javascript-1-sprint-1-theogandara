function oneThroughTwenty() {

  const resultado = []
  let max = 0
    
  while (max < 20){
  max++
  resultado.push (max)
  }
  return resultado
}

console.log(oneThroughTwenty());

function evensToTwenty() {

  let max = 0
  const resultado = []   
    while (max < 20){
    max += 2
    resultado.push(max)
    }
    return resultado
}

console.log(evensToTwenty());

function oddsToTwenty() {
    
  let max = 1
  const resultado = []

      while (max <20){
      resultado.push(max)
      max += 2
    }
   return resultado
}

console.log(oddsToTwenty());

function multiplesOfFive() {
    
  let multiFive = 5
  const resultado = []

  while (multiFive <= 100){
    resultado.push (multiFive)
    multiFive += 5
  }
  return resultado
}

console.log(multiplesOfFive());

function squareNumbers() {
    
  let numeroQuadrado = 1

  const resultado = []

  while (numeroQuadrado <= 10){
    resultado.push (numeroQuadrado**2)
    numeroQuadrado++
   }
    return resultado
}

console.log(squareNumbers());

function countingBackwards() {
    
  let max = 20
  const resultado = []

  while(max >= 1){
    resultado.push(max)
    max -= 1
  }
  return resultado
}

console.log(countingBackwards());

function evenNumbersBackwards() {
    
    let max = 20
    const resultado = []
    while (max >= 2){
      resultado.push(max)
      max -= 2
    }
    return resultado
  }

console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
    
let impares = 19
const resultado = []

  while(impares >= 1){
    resultado.push(impares)
    impares -= 2
  }
  return resultado
}

console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
    
  let max = 100
  const resultado = []
  
    while(max >= 5){
      resultado.push(max)
      max -= 5
    }
    return resultado
}

console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
    
let max = 10
const resultado = []

   while(max >= 1){
    resultado.push (max**2)
    max -= 1
  }
  return resultado
}

console.log(squareNumbersBackwards());
