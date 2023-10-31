import {useRef} from 'react';

const store = useRef<Store>(null);

if (!store.current) {
  store.current = new Store();
}