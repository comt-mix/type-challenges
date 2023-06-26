// type MyOmit<T, K> = any

// 내 풀이
// type MyOmit<T, K> = K extends T ? never : K;

// 정답
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
