/*
 Another way to use generics in your own code is by creating generic functions,
 these are functions that are annotated with a generic,
 meaning that this function can take a generic type to perform its operations:
 */
function typedFetch<Data>(url: string): Promise<Data> {
  return new Promise((reject, resolve) => resolve({
    username: 'some user',
    email: 'some email'
  }))
}

typedFetch<{ username: string; email: string }>('/someapi/endpoint')
  .then((result) => {
    console.log(result)/*?*/
  })


function mergeObjects<ObjA, ObjB>(objA: ObjA, objB: ObjB) {
  return {...objA, ...objB }
}
const result = mergeObjects({ a: 1, b: "b" }, { n:10, c: [1,2,3] })
