

function Sort(input){

  var output = input.sort(compareNumbers);

  console.log(output);


}

function compareNumbers(a, b) {
  return a - b;
}


console.log(Sort([1, 10, 2, 5, 9]));


