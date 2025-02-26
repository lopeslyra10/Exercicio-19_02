function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(inverterArray<number>([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(inverterArray<string>(["a", "b", "c"])); // ["c", "b", "a"]
