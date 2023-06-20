// type MyReturnType<T> = any

type MyReturnType<T extends (...args: unknown[]) => unknown> = T extends (
  ...args: unknown[]
) => infer R
  ? R
  : never

// 내 풀이
// type MyReturnType<T> = T extends (...args: infer U) => unknown ? U : never;
