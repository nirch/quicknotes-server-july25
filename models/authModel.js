const bcrypt = require("bcrypt");

const users = [
  {
    id: "1",
    name: "Nir Channes",
    email: "nirch@example.com",
    password: "$2a$10$46zfiyv9XAtAB3Fh7AaMDuKd5gsRlboX8q3O4ygx/yJk4tiyCN9jK",
  },
  {
    id: "2",
    name: "John Doe",
    email: "johnd@example.com",
    password: "$2a$10$uEp5ZfDp60ahwJwpvGyBc.D2SLTy.ssl5IylOBPZpqRWp5lQvyG5O",
  },
];

async function login(email, password) {
  const user = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (user && (await bcrypt.compare(password, user.password))) {
    const { password: _, ...userNoPassword } = user;
    return userNoPassword;
  }
}

module.exports = { login };
