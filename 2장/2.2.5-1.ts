interface Cube {
  width: number
  height: number
  depth: number
}

function addLines(c: Cube) {
  let total = 0;

  for (const axis of Object.keys(c)) {
    // 🚨 Element implicitly has an 'any' type
    // because expression of type 'string' can't be used to index type 'Cube'.
    // 🚨 No index signature with a parameter of type 'string'
    // was found on type 'Cube'
    const length = c[axis];

    total += length;
  }
}
