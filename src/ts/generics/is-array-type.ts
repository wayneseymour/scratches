type IsArray<T> = T extends any[] ? true : false;
type res1 = IsArray<number[]>;
type res2 = IsArray<["a", "b", "c"]>;
type res3 = IsArray<"this is not an array">;
