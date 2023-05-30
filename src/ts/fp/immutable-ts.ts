type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};

interface Person {
  name: string;
  address: {
    country: string;
  };
}

const me = {
  name: 'James',
  address: {
    country: 'United Kingdom',
  },
} as const;

const isJames = (person: Person) => {
  person.name = 'Sarah';
  return person.name === 'James';
};

console.log(isJames(me));
console.log(me.name);
