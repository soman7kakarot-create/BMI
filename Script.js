function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let result = document.getElementById("result");
  let category = document.getElementById("category");

  if (height === "" || weight === "" || height <= 0 || weight <= 0) {
    result.innerHTML = "⚠️ Please enter valid values!";
    category.innerHTML = "";
    return;
  }

  // Convert height from cm to meters
  let heightInMeters = height / 100;
  let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  result.innerHTML = `Your BMI is <span style="color:#2575fc;">${bmi}</span>`;

  if (bmi < 18.5) {
    category.innerHTML = "🔹 Underweight";
    category.style.color = "orange";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category.innerHTML = "✅ Normal weight";
    category.style.color = "green";
  } else if (bmi >= 25 && bmi < 29.9) {
    category.innerHTML = "⚠️ Overweight";
    category.style.color = "red";
  } else {
    category.innerHTML = "❌ Obesity";
    category.style.color = "darkred";
  }
}
