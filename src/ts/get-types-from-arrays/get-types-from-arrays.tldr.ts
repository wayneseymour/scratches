const animals = ["cat", "dog", "mouse"] as const;
type Animal = (typeof animals)[number];
const someA: Animal = "cat";
console.log(`\nλjs someA: \n  ${someA}`)

const never: Animal = "horse"
