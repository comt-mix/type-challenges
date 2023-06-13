// type Push<T, U> = any

// 내 풀이 및 정답
type Push<T extends unknown[], U> = [...T, U];

