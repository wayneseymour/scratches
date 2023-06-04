function createMap<K,V>() {
  return new Map<K,V>()
}
const map1 = createMap<number, number>() //Map<number, number>
const map2 = createMap<string, number>() //Map<string, number>
const map3 = createMap()

function createMapWithDefaults<K = string ,V = string>() {
  return new Map<K,V>()
  // return new Map();
}
const createdmap1 = createMapWithDefaults<number, number>() //Map<number, number>
const createdmap2 = createMapWithDefaults<string, number>() //Map<string, number>
const createdmap3 = createMapWithDefaults() // Map<string, string>
