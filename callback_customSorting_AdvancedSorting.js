var students = [
  { id: 1, name: "alex",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// Take input of an Object containing student information like id, name age
// Process to Sort them by name ascending
//Out the result

students.sort(function(a, b) {
  var firstName = a.name.toUpperCase();
  var secondName = b.name.toUpperCase();
  if (firstName < secondName) {
    return -1;
  }
  if (firstName > secondName) {
    return 1;
  }

  else if(a.age<b.age)
  {
    return 1;
  }

});

console.log(students);



