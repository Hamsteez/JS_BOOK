let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];


function contains(location, array) {
  let truy = 0;
  array.forEach(function (arrLoc) {
    if (arrLoc === location) {
      truy = 1;
    }
  });
  if (truy === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false