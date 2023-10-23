interface Pet {
  name: string
}

interface Cat {
  name: string
  age: number
}

let pet: Pet;
let cat: Cat = { name: "Zag", age: 2 };

// ✅ OK
pet = cat;
