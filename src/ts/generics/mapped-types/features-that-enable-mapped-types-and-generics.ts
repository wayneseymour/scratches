/*
 The "keyof" operator
 keyof is Typescript's answer to JavaScript’s Object.keys operator.

 Object.keys returns a list of an object’s keys.

 "keyof" does something similar but in the typed world only.
 It will return a literal union type listing the "properties" of an object-like type.

 This operator is the base building block for advanced typing like mapped and conditional types.
 */

type Colors = {
  primary: '#eee',
  primaryBorder: '#444',
  secondary: '#007bff',
  black: '#000',
  white: '#fff',
  whiteBorder: '#f2f2f7',
  green: '#53C497',
  darkGreen: '#43A17C',
  infoGreen: '#23AEB7',
  pastelLightGreen: '#F3FEFF',
}
type ColorKeys = keyof Colors;
function SomeComponent({ color }: { color: ColorKeys }) {
  Object.keys(color)
  color[0]
  return "Something"
}
SomeComponent({ color: "WhateverColor"})
SomeComponent({ color: "primary"})
Object.keys('hi')
typeof "hi"
