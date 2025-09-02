const users = [
  {
    id: "1",
    name: "Nir Channes",
    email: "nirch@example.com",
    password: "123",
  },
  {
    id: "2",
    name: "John Doe",
    email: "johnd@example.com",
    password: "123",
  },
];

async function login(email, password) {
  const user = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
  );
  const { password:_, ...userNoPassword } = user;
  return userNoPassword;
}

module.exports = { login };
