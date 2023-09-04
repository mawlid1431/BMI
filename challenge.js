// Good Luck! You got this 💪🏾

// Write your code here.
//





function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

// Calculate Ali's BMI
const aliWeight = 75; // Ali's weight in kilograms
const aliHeight = 1.75; // Ali's height in meters
const aliBMI = calculateBMI(aliWeight, aliHeight);

// Calculate Mohamed's BMI
const mohamedWeight = 80; // Mohamed's weight in kilograms
const mohamedHeight = 1.80; // Mohamed's height in meters
const mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight);

// Compare BMIs
if (aliBMI > mohamedBMI) {
  console.log("Ali's BMI is higher than Mohamed's.");
} else if (aliBMI < mohamedBMI) {
  console.log("Mohamed's BMI is higher than Ali's.");
} else {
  console.log("Ali and Mohamed have the same BMI.");
}

