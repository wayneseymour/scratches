const input: IE.IOEither<Error, string> = IE.right("foo");

const value = input();

let result: E.Either<Error, number>;

if (value._tag === "Right") {
  result = parse(value.right); // where value.right is our 'foo'
}
