// create data *******
function createData(
  id: number,
  username: string,
  gmail: string,
  degree: string,
  hobbie: string
) {
  return {
    id,
    username,
    gmail,
    degree,
    hobbie,
  };
}

export const allUserData = [
  createData(1, "Harshit gupta", "harshit@gmail.com", "BSc", "Cricket"),
  createData(2, "Jhon", "jhon@gmail.com", "Bcom", "football"),
];
