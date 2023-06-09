function getObjectProps<
  Obj,
  Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] {
  return obj[key]
}
/**
 Let's dissect the generic portion of the above function definition:

 Obj is the name used to identify this Generic parameter.
 Usually people use single letters to identify the generic,
 but IMHO it is more clear to use a better name like you would with a variable.
 The intention here is to accept any object.
 The second generic parameter is Key extends keyof Obj.
 Here the extends keyword is used as a constraint and
   can be read as "Key is of ...." meaning that the Key generic
   can only be a value found in keyof Obj.

 keyof Obj is, as mentioned before,
   a union of string literals from the properties
   of Obj and Obj is the first generic parameter.
   So in Typescript you can reference the previous generic directly.
 So, does all of that mean?

 It means that the function arguments of getObjectProps will accept any object inside the obj argument,
 but they key argument can only be a string literal that exists as a property of obj
 */

const User = {
  name: 'Matias',
  site: 'matiashernandez.dev',
  location: {
    country: 'Chile',
    city: 'Talca'
  }
}
const email = getObjectProps(User, 'email') //Argument of type '"email"' is not assignable to parameter of type '"name" | "site" | "location"'.
const loc = getObjectProps(User,'location')

/*
Other type of constraint that you can write using the keyof operator
is to restrict the return type of a function.
 */
function objectKeys<Obj extends Record<string, unknown>>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[];
}
/*
 The above example can be read as objectKeys accepts a obj arguments that has to be of type Record<string, unknown> and will return an array of all of the properties of that obj.
 */
export type QueryFunction<
  T = unknown,
  TQueryKey extends QueryKey = QueryKey
> = (context: QueryFunctionContext<TQueryKey>) => T | Promise<T>;
// The T = unknown is simply a default value, just like `const saySomething = (x: string = 'hi') = console.log(x);`

type CardWithDescription = {
  title?: never;
  footer?: never;
  description: string;
};
type CardWithoutDescription = {
  title: string;
  footer: string;
  description?: never;
};
type CardProps = CardWithDescription | CardWithoutDescription;
function Card(props: CardProps) { // Kinda React-ish
  return null;
}
const tAndF = Card({ title: 'Has Title and Footer', footer: 'some footer' });
const dOnly = Card({ description: 'just a description' });
const all = Card({ title: "Has Title and Footer", footer: "some footer", description: "some description"});
