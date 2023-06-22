const permuteUnique = function(nums) {
  const result = [];
  const visited = Array.from(new Array(nums.length)).fill(false);
  const current = [];

  const backTracking = (nums, curr) => {
      if(curr.length === nums.length) {
          result.push([...curr]);
          return result;
      }

      for (let i = 0; i < nums.length; i++) {
          if(visited[i]) continue;
          
          if (nums[i-1] === nums[i] && i > 0 && !visited[i - 1]) continue;

          curr.push(nums[i]);
          visited[i] = true;
          backTracking(nums, curr);
          curr.pop();
          visited[i] = false;
      }
  }

  nums.sort((x, y) => x - y);
  backTracking(nums, current);

  return result;
};

console.log(permuteUnique([1,2,1]));