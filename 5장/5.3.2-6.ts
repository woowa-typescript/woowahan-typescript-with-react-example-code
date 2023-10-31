type One<T> = { [P in keyof T]: Record<P, T[P]> }[keyof T];
