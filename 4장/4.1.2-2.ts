interface CookingStep {
  orderId: string;
  price: number;
}

interface DeliveryStep {
  orderId: string;
  time: number;
  distance: string;
}

function getDeliveryDistance(step: CookingStep | DeliveryStep) {
  return step.distance;
  // Property ‘distance’ does not exist on type ‘CookingStep | DeliveryStep’
  // Property ‘distance’ does not exist on type ‘CookingStep’
}
