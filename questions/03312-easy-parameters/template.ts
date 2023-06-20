// type MyParameters<T extends (...args: any[]) => any> = any

type MyParameters<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer U
) => unknown
  ? U
  : never

// 내 풀이
// type MyParameters<T extends (...args: unknown[]) => unknown> = T extends unknown ? unknown : T;
