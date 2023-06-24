const n = 4;
const k = 4;

const arrToPermute = Array.from({length: n}, (_, x) => x + 1);

// const findKPermutation = (arrToPermute) => {
//     const values = Array.from({length: arrToPermute.length}).fill(false);
//     const current = [];
//     const result = [];
//     let desiredResult = '';

//     const permute = (arrayTool) => {
//         if(current.length === arrToPermute.length) {
//             result.push([...current]);

//             if(result.length === k) {
//                 desiredResult = result[k- 1].join('');
//             }

//             return;
//         }

//         for ( let i = 0; i < arrToPermute.length; i++) {

//             if(desiredResult) {
//                 return;
//             }

//             if(values[i]) {
//                 continue;
//             }
            
//             values[i] = true;
//             current.push(arrToPermute[i]);
//             const remaining = arrayTool.slice(i, 0).concat(arrayTool.slice(i + 1));

//             permute(remaining);

//             current.pop();
//             values[i] = false;
//         }
//     }

//     permute(arrToPermute);
//     return desiredResult;
// }

const findKPermutation = (n, k) => {

    const values = Array.from({length: n}).fill(false);
    const arrToPermute = Array.from({length: n}, (_, x) => x + 1);

    const current = [];
    const result = [];
    let desiredResult = '';

    const permute = (arrayTool) => {
        if(current.length === arrToPermute.length) {
            result.push([...current]);

            if(result.length === k) {
                desiredResult = result[k - 1].join('');
            }

            return;
        }

        for ( let i = 0; i < arrToPermute.length; i++) {

            if(desiredResult) {
                return;
            }

            if(values[i]) {
                continue;
            }
            
            values[i] = true;
            current.push(arrToPermute[i]);
            const remaining = arrayTool.slice(i, 0).concat(arrayTool.slice(i + 1));

            permute(remaining);

            current.pop();
            values[i] = false;
        }
    }

    permute(arrToPermute);

    return desiredResult;
}

console.log(findKPermutation(3, 1));