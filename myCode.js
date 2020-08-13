function addition(a, b) {
  return a + b
}

function multiplication(a, b) {
  return a * b;
}

function print(operation, a, b) {
  console.log(operation(a, b));
}

print(addition, 4, 4);
print(multiplication, 4, 4);