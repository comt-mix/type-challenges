// type Concat<T, U> = any

type Concat<T extends any[], U extends any[]> = [...T, ...U];

// 내 풀이
// type Concat<T extends number[], U extends number[]> = [...T, ...U];
