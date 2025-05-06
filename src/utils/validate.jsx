export const checkValidData = (email, password, name = "") => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isNameValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(name);

  if (!isEmailValid) return "Enter a valid Email";
  if (!isPasswordValid) return "Enter a valid password";
  if (name && !isNameValid) return "Enter a valid name";

  return null;
};
