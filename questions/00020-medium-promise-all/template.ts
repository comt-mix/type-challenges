// declare function PromiseAll(values: any): any

// 내 풀이
// declare function PromiseAll(values: any): new Promise<T: values>

// 정답
declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>
