export interface User {
  email: string;
  password: string;
}

const fakeUsers: User[] = [
  {
    email: "admin@gmail.com",
    password: "admin123",
  },
  {
    email: "user@gmail.com",
    password: "user123",
  },
];

export const loginUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = fakeUsers.find(
    (user) => user.email === email && user.password === password
  );

  return user ? user : null;
};

export default fakeUsers;
