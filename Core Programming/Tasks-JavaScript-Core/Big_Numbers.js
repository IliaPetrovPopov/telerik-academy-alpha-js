let input = ["10 11",
"4 7 9 7 1 7 6 7 9 6",
"6 2 4 2 8 9 5 6 7 3 9"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let sizes = gets().split(" ").map(Number);
let size1 = sizes[0];
let size2 = sizes[1];
let biggerSize = size1 < size2 ? size2 : size1;

let arr1 = gets().split(" ").map(Number);
let arr2 = gets().split(" ").map(Number);

let final = '';
let previous = 0;

for (let i = 0; i < biggerSize + 1; i++) {
let sum = 0;
    if( arr1[i] === undefined && arr2[i] === undefined ) {
      if(previous > 9) {
        final += 1
      } else {
        break;
    }
  } else if(arr1[i] === undefined) {
     sum += arr2[i];
     if (sum >= 9 && previous < 10) {
      final += sum % 10 + " ";
      previous = sum;
    }
  else if (sum >= 9 && previous > 9) {
      sum += 1;
      final += (sum % 10) + " ";
      previous = sum;
  }
  else if (sum < 9 && previous > 9) {
    final += sum + 1 + " ";
    previous = 0;
  } 
  else if (sum < 10) {
    final += sum + " ";
  } 
  } else if (arr2[i] === undefined) {
    sum += arr1[i];
    if (sum >= 9 && previous < 10) {
      final += sum % 10 + " ";
      previous = sum;
    }
  else if (sum >= 9 && previous > 9) {
      sum += 1;
      final += (sum % 10) + " ";
      previous = sum;
  }
  else if (sum < 9 && previous > 9) {
    final += sum + 1 + " ";
    previous = 0;
  } 
  else if (sum < 10) {
    final += sum + " ";
  } 
  } 
  else {
    sum = arr1[i] + arr2[i];
  
    if (sum >= 9 && previous < 10) {
        final += sum % 10 + " ";
        previous = sum;
      }
    else if (sum >= 9 && previous > 9) {
        sum += 1;
        final += (sum % 10) + " ";
        previous = sum;
    }
    else if (sum < 9 && previous > 9) {
      final += sum + 1 + " ";
      previous = 0;
    } 
    else if (sum < 10) {
      final += sum + " ";
    } 
  }
}

print(final);