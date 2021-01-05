function calculateBMI(height, weight) {
  mHeight = (height * (10**-2));
  console.log(mHeight);
  let bmi = weight / mHeight**2;
  console.log(bmi);
  bmi = bmi.toFixed(2);
  console.log(bmi);
}

calculateBMI(167.64, 64.4101); // "24.69"