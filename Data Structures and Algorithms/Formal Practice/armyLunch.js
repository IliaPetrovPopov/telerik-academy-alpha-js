let input = ["7",
"P4 P2 P3 S1 C2 P1 C1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

const soldiersNum = +gets();
const soldiersList = gets().split(' ');

const sergeants = [];
const corporal = [];
const privates = [];

for ( let i = 0; i < soldiersList.length; i++) {
    const currentSoldier = soldiersList[i];
    const checkSymbol = currentSoldier.split('')[0];

    if(checkSymbol === 'S') {
        sergeants.push(currentSoldier);
    } else if (checkSymbol === 'C') {
        corporal.push(currentSoldier);
    } else {
        privates.push(currentSoldier);
    }
}

const finalArrangement = [...sergeants, ...corporal, ...privates];

print(finalArrangement.join(' '));
