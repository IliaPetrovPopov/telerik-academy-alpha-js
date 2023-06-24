const nextPermutation =  (nums) => {
    if (nums.length <= 1) return;

    let leftHandSwap;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            leftHandSwap = i;
            break;
        }
    }

    for (let i = nums.length - 1; i > leftHandSwap; i--) {
        if (nums[i] > nums[leftHandSwap]) {

            [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

            let chopped = nums.splice(leftHandSwap + 1);
            chopped.sort((a, b) => a - b);
            nums.push(...chopped);
            return;
        }
    }

    nums.sort((a, b) => a - b);
};

const arr = [7, 2, 3, 2, 0, 1, 3, 4, 5];
console.log(nextPermutation(arr));