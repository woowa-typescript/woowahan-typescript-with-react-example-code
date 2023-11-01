const promises = [Promise.resolve('Mark'), Promise.resolve(38)];
type Expected = UnpackPromise<typeof promises>; // string | number