import {useState} from 'react';

const [items, setItems] = useState<Item[]>([]);
const selectedItems = items.filter((item) = > item.isSelected);