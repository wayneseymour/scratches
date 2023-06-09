function objectKeys<Obj extends Record<string, unknown>>(
  obj: Obj
): (keyof Obj)[] {
  return Object.keys(obj) as (keyof Obj)[];
}

/*
The above example can be read as objectKeys accepts a obj argument
that has to be of type Record<string, unknown> and will return an
array of all of the properties of that obj.
*/
