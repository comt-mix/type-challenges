// type Concat<T, U> = any

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

// 내 풀이
// type Concat<T extends number[], U extends number[]> = [...T, ...U];
