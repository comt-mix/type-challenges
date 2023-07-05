// type TupleToUnion<T> = any

// 내 풀이
// type TupleToUnion<T> = T extends infer U ? U : never

// 정답
type TupleToUnion<T> = T extends Array<infer U> ? U : never
