import {useState, useEffect} from 'react';

const [items, setItems] = useState<Item[]>([]);
const [selectedItems, setSelectedItems] = useState<Item[]>([]);

useEffect(() => {
  setSelectedItems(items.filter((item) = > item.isSelected));
}, [items]);