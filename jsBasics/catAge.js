function catAge(age) {
  if (age === 0) {
    console.log(0);
  } else if (age === 1) {
    console.log(15);
  } else if (age === 2) {
    console.log(24);
  } else {
    let num = 24 + ((age -2) * 4);
    console.log(num);
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32