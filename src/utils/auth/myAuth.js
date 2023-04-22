export const signUp = (email, password, displayName) => {
  const currUsers = JSON.parse(localStorage.getItem("users"));
  if (currUsers?.find((user) => user.email === email))
    throw new Error("User Exists");
  const newUsers = currUsers
    ? [...currUsers, { email, password, displayName }]
    : [{ email, password, displayName }];
  localStorage.setItem("users", JSON.stringify(newUsers));
  localStorage.setItem("user", JSON.stringify({ email, displayName }));
  return { email, displayName };
};

export const signIn = (email, password) => {
  const local = localStorage.getItem("users");
  const currUsers = local && JSON.parse(local);
  const currUser = currUsers?.find(
    (user) => user.email === email && user.password === password
  );
  // if (!currUsers) throw new Error("Wrong email or password");
  if (currUser) {
    const { email, displayName } = currUser;
    localStorage.setItem("user", JSON.stringify({ email, displayName }));
    return { email, displayName };
  } else {
    throw new Error("Wrong email or password");
  }
};
