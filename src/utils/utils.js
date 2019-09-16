export const getAge = (dateOfBirth) => {
  const dateToCalculate = new Date();
  const calculateYear = dateToCalculate.getFullYear();
  const calculateMonth = dateToCalculate.getMonth();
  const calculateDay = dateToCalculate.getDate();

  const birthYear = parseInt(dateOfBirth.split("-")[0]);
  const birthMonth = parseInt(dateOfBirth.split("-")[1]);
  const birthDay = parseInt(dateOfBirth.split("-")[2]);

  let age = calculateYear - birthYear;
  const ageMonth = calculateMonth - birthMonth;
  const ageDay = calculateDay - birthDay;

  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    age = parseInt(age) - 1;
  }
  return age;
};

export const isValidName = (name) => name.trim().split(" ").length > 1;
export const isValidAge = (age) => age > 18;
