// type Last<T extends any[]> = any

// 내 풀이
// type Last<T extends unknown[]> = T extends Array<infer U> ? U[U.length - 1] : never

// 정답
type Last<T extends any[]> = [any, ...T][T["length"]]
