function getString(str: string): string {
    let unique: string = "";
    for (let i: number = 0; i < str.length; i++) {
        if (!unique.includes(str[i])) {
            unique += str[i];
        }
    }
    return unique;
}

let inputString: string = "banana";
console.log(getString(inputString)); 
