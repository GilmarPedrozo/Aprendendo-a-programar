const typeTriangle = (a, b, c) => {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
  
      if (a == b && b == c) {
        console.log('Triângulo equilátero');
      }
      else if (a == b || a == c || c == b) {
        console.log('Triângulo isóceles');
      }
      else {
        console.log('Triângulo escaleno');
      }
    }
  }
  
  typeTriangle(5, 6, 7);
  typeTriangle(10, 10, 10);
  typeTriangle(20, 10, 20);