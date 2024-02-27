export {};

// EXAMPLE 1 - Get the Element type from an Array type in TypeScript

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

const arr1 = ['a', 'b'];

// 👇️ type T1 = string
type T1 = ArrElement<typeof arr1>;

const arr2 = ['a', 1];

// 👇️ type T2 = string | number
type T2 = ArrElement<typeof arr2>;

// ---------------------------------------------------

// // EXAMPLE 2 - Using conditional types

// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   id: number;
// }

// // 👇️ string
// type T3 = Employee extends Person ? string : number;
