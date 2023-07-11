// type Pop<T extends any[]> = any

// 내 풀이
// type Pop<T extends unknown[]> = [...y, x] extends T ? x : never

// 정답
type Pop<T extends unknown[]> = T extends [...infer L, infer R] ? L : never
