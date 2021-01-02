let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
fish.forEach(function findNemo(string) {
  if (string === 'Bruce') {
    return;
  } else {
    console.log(string);
  }
});