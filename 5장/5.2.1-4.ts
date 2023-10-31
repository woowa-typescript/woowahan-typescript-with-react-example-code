type Vertical = 'top' | 'bottom';
type Horizon = 'left' | 'right';
type Direction = Vertical | `${Vertical}${Capitalize<Horizon>}`;