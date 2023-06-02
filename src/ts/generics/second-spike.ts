type ExampleFunction = () => {
  something: {
    excellent: string
    awesome: number
  }
}
const exampleFunc: ExampleFunction = () => {
  //  ^^^^^^^^^^^ Error here!
  return {
    something: {
      excellent: 'str',
      awesome: true,
    },
  }
}

type ExampleReturnType = {
  something: {
    excellent: string
    awesome: number
  }
}
const example = (): ExampleReturnType => {
  return {
    something: {
      excellent: 'str',
      awesome: true,
      //^^^^^ Type 'boolean' is not assignable to type 'number'.
    },
  }
}

example()
