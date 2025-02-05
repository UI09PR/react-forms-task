export const getCorrectName = (firstName: string, lastName: string) => {
  if (firstName.length + lastName.length > 20)
    return firstName.length > 20 ? firstName[0].toUpperCase() + "." + lastName[0].toUpperCase() + "." : firstName;

  return firstName + " " + lastName;
};
