let input = ["3",
"o W"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

  function generateVariations(Z, ...symbols) {
    const variations = [];
  
    function backtrack(currentVariation) {
        if(currentVariation.length === Z) {
            variations.push(currentVariation.join(''));
            return;
        }

        for (const symbol of symbols) {
            currentVariation.push(symbol);
            backtrack(currentVariation);
            currentVariation.pop();
        }
    }
  
    backtrack([]);
  
    return variations.sort();
  }

  const lenght = +gets();
  const [firstL, secondL] = gets().split(' ');


generateVariations(lenght, firstL, secondL).map(variation => print(variation));