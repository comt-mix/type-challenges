// type DeepReadonly<T> = any

// 내 풀이
// type DeepReadonly<T> = T | object<DeepReadonly<T>>

// 정답
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> }
