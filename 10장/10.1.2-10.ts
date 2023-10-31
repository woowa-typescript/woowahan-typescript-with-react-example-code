import {useState, useMemo} from 'react';

const [items, setItems] = useState<Item[]>([]);
const selectedItems = useMemo(() => veryExpensiveCalculation(items), [items]);