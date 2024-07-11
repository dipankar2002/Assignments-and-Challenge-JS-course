/*
    1. Predict the result of these 5 operations without executing them: 
          '9' - '5'; 
          '19' - '13' + '17'; 
          '19' - '13' + 17; 
          '123' < 57; 
          5 + 6 + '4' + 9 - 4 - 2; 
    2. Execute the operations to check if you were right 
*/

  const ans1 = '9' - '5';  // 4x
  const ans2 = '19' - '13' + '17';  // 13x
  const ans3 = '19' - '13' + 17;  // 13x
  const ans4 = '123' < 57;  // false
  const ans5 = 5 + 6 + '4' + 9 - 4 - 25  // -6x

  console.log(`\nANS1 = ${ans1}\nANS2 = ${ans2}\nAN3 = ${ans3}\nANS4 = ${ans4}\nANS5 = ${ans5}\n`);