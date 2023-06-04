/*
What is unknown?
Seems like "unknown" is only assignable to "any".

 It is the type-safe counterpart of any.
 We can assign anything to an unknown variable,
 but the unknown isn't assignable to any other
 types except to unknown and any.
 To use an unknown type, we need to first assert
 its type or narrow it to a more specific type.
 */

let x: unknown = ('some x' as any);
x = ('some x' as string).toUpperCase();
x=1
console.log(`\n### x: \n\t${x}`);
x=true
console.log(`\n### x: \n\t${x}`);
x={}
console.log(`\n### x: \n\t${x}`);
