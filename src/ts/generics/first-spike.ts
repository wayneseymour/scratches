const returnWhatIPassInNaive = (input: any) => {
  return input
}
const strNaive = returnWhatIPassInNaive('matt')
// strNaive.touppercase() // No error in js here, but it errors on the type level

type ReturnWhatIPassIn<TInput> = TInput
type Str = ReturnWhatIPassIn<'matt'>
const returnWhatIPassIn = <TInput>(input: TInput): TInput => {
  return input
}
const str = <'haz'>returnWhatIPassIn('matt')
str.toUpperCase()
