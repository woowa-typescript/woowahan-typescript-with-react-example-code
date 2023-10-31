import { useReducer } from 'react';

//Before
const [fold, setFold] = useState(true);

const toggleFold = () => {
  setFold((prev) => !prev);
};

// After
const [fold, toggleFold] = useReducer((v) => !v, true);