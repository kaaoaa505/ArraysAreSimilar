function solve(a: number[], b: number[]): boolean{
    a.sort();
    b.sort();

    if(JSON.stringify(a) == JSON.stringify(b)){
        return true
    }

    return false;
}

let a = [1,2,3];
let b = [1,2,3];
console.log(solve(a, b));

a = [1,2,3];
b = [2,1,3];
console.log(solve(a, b));

a = [1,2,2];
b = [2,1,1];
console.log(solve(a, b));