function getHigherNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return numberOne;
    } else {
      return numberTwo;
    }
  }
  
  // Ejemplo de uso
  const result = getHigherNumber(5, 8);
  console.log(result); // Esto imprimirá 8, ya que es el número más alto
  