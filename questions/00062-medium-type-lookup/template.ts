// type LookUp<U, T> = any

// 내 풀이
// type LookUp<U, T> = U extends T ? U : T

// 정답
type LookUp<U, T> = U extends { type: T } ? U : never
