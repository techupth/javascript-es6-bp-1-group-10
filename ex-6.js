//Exercise #6: Nullish Coalescing

let height = undefined;
let result = checkHeight(height);

function checkHeight(height) {
    return height ?? "Height is not defined"
};

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
