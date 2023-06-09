export type QueryFunction<
  T = unknown,
  TQueryKey extends QueryKey = QueryKey
> = (context: QueryFunctionContext<TQueryKey>) => T | Promise<T>;

/*
This usage of extends narrowing down or constraining the type of a generic
 is the corner stone to be able to implement conditional types since the
 extends will be used as condition to check if a generic is or not of a
 certain type.

In the example above, from a real world implementation of tanstack-query,
a new type is defined: QueryFunction. This type accepts two generic values,
T and TQueryKey.

The extends keyword here constrains the possible values of the TQueryKey
generic to be of the type QueryKey, defined elsewhere in the source code.
In other words, TQueryKey has to be of type QueryKey.

If you're not yet comfortable with the use of generics,
think of them as function arguments in the type world.
The QueryFunction type can be thought of as a function type that accepts
two arguments (generics) named T, with a default value of unknown,
and TQueryKey, with a default value of QueryKey.

This usage of extend, narrowing down or constraining the type of a generic,
is the cornerstone of being able to implement conditional types,
since extends is used as a condition to check whether a generic is or is
not of a certain type.
*/

