const ListPage: React.FC = () => {
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [items, setItems] = useState<ListItem[]>([]);

  useEffect(() => {
    // 예시를 위한 API 호출과 then 구문
    fetchList(filter).then(({ items }) => {
      setCartCount(items.length);
      setItems(items);
    });
  }, []);

  return (
    <div>
      <Chip label={totalItemCount} />
      <Table items={items} />
    </div>
  );
};
