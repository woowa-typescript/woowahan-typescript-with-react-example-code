interface Pet {
  name: string
}
let cat = { name: "Zag", age: 2 };
function greet(pet: Pet) {
  console.log(`Hello, ${pet.name}`);
}

greet(cat); // ✅ OK
