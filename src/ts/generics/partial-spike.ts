/*
 This type takes a generic named T and transforms each property of that object T into an optional property, adding
 the ? symbol and transforming the value of that property into a union type between the original value and undefined.
 */
type TrezPartial<SomeObjectGeneric> =
  { [EachPropertyWillBeOptional in keyof SomeObjectGeneric]?: SomeObjectGeneric[EachPropertyWillBeOptional] | undefined; }
export type User = {
  id: string;
  email: string;
  age: number
}
type PartialUser = Partial<User>
type TrezPartialUser = TrezPartial<User>;
type NewUser = Omit<User, "id">
