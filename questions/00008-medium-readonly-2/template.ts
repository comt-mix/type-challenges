// type MyReadonly2<T, K> = any

// 내 풀이
// type MyReadonly2<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? P in K : Readonly P in T ]: T[P]
// }

// 정답
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [p in keyof T as p extends K ? never : p]: T[p]
} & {
  readonly [p in K]: T[p]
}
