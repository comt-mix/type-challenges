// type Unshift<T, U> = any

// 내 풀이 및 정답
type Unshift<T extends unknown[], U> = [U, ...T];
