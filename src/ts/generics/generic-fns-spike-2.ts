// Generics provide a way to use Types as variables in other
// types. Meta.

// We'll be trying to keep this example light, you can do
// a lot with generics and it's likely you will see some very
// complicated code using generics at some point - but that
// does not mean that generics are complicated.

// Let's start with an example where we wrap an input object
// in an array. We will only care about one variable in this
// case, the type which was passed in:

function wrapInArray<Type>(input: Type): Type[] {
  return [input];
}

// Note: it's common to see Type referred to as T. This is
// culturally similar to how people use i in a for loop to
// represent index. T normally represents Type, so we'll
// be using the full name for clarity.

// Our function will use inference to always keep the type
// passed in the same as the type passed out (though
// it will be wrapped in an array).

const stringArray = wrapInArray("hello generics");
const numberArray = wrapInArray(123);
