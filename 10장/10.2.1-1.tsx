import { observer } from 'mobx-react-lite';
import { makeAutoObservable } from 'mobx';

class Cart {
  itemAmount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.itemAmount += 1;
  }

  reset() {
    this.itemAmount = 0;
  }
}

const myCart = new Cart();
const CartView = observer(({ cart }) => (
  <button onClick={() => cart.reset()}>
    amount of cart items: {cart.itemAmount}
  </button>
));

ReactDOM.render(<CartView cart= {myCart} />, document.body);