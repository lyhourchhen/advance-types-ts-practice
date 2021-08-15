type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Length<T extends any> = T extends readonly any[] ? T["length"] : Error;

type First<T extends any[]> = T extends [] ? never : T[0];

type MyReadonly<T> = {
  readonly [k in keyof T]: T[k];
};

type MyExclude<T, U> = T extends U ? never : T;

type Awaited<X> = X extends Promise<infer X> ? X : never;

type If<C, T, F> = C extends false ? F : T;

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Includes<T extends readonly any[], U extends any> = {
  [k in T[number]]: true;
}[U] extends true
  ? true
  : false;
