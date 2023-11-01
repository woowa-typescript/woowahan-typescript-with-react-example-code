type ExcludeOne<T> = { [P in keyof T]: Partial<Record<Exclude<keyof T, P>, undefined>> }[keyof T];
