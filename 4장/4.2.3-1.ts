interface Range {
  start: Date;
  end: Date;
}

interface DatePickerProps {
  selectedDates?: Date | Range;
}

const DatePicker = ({ selectedDates }: DatePickerProps) => {
  const [selected, setSelected] = useState(convertToRange(selectedDates));
  // ...
};

export function convertToRange(selected?: Date | Range): Range | undefined {
  return selected instanceof Date
    ? { start: selected, end: selected }
    : selected;
}
