# Advance Type Practise

### example 
```ts
// Pick<T,K>
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P] 
}
```
