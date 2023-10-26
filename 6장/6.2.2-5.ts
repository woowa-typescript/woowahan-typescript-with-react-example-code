interface Square {
    width: number;
}

interface Rectangle extends Square {
    height: number;
}


type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
    // ‘Rectangle’ only refers to a type, but is being used as a value here
    // Property ‘height’ does not exist on type ‘Shape’
    // Property ‘height’ does not exist on type ‘Square’
        return shape.width * shape.height;
    } else {
    return shape.width * shape.width;
    }
}
