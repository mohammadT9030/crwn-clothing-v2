import { useRef } from "react";
import { signIn, signUp } from "../../utils/auth/myAuth";
import { useUser } from "../../contexts.jsx/user.context";

const SignIn = () => {
  const inputsRef = useRef({
    signIn: { email: null, password: null },
    signUp: { displayName: null, email: null, password: null },
  });

  const { setCurrUser } = useUser();

  const logUser = (e) => {
    e.preventDefault();
    try {
      const user = signIn(
        inputsRef.current.signIn.email.value,
        inputsRef.current.signIn.password.value
      );
      console.log(user);
      setCurrUser(user);
    } catch (err) {
      if (err.message === "Wrong email or password") {
        alert("Wrong 'email' or 'password'!");
      }
      console.error("error in sign-in component", err);
    }
  };

  const registerUser = (e) => {
    e.preventDefault();
    try {
      const user = signUp(
        inputsRef.current.signUp.email.value,
        inputsRef.current.signUp.password.value,
        inputsRef.current.signUp.displayName.value
      );
      console.log(user);
      setCurrUser(user);
    } catch (err) {
      if (err.message === "User Exists") {
        alert("User with this email already exists");
      }
      console.error("error in sign-in component", err);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <form onSubmit={logUser}>
        <div>
          <input
            type="email"
            placeholder="email"
            ref={(r) => (inputsRef.current.signIn.email = r)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            ref={(r) => (inputsRef.current.signIn.password = r)}
          />
        </div>
        <button>Sign In</button>
      </form>
      <form onSubmit={registerUser}>
        <div>
          <input
            type="text"
            placeholder="displayName"
            ref={(r) => (inputsRef.current.signUp.displayName = r)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            ref={(r) => (inputsRef.current.signUp.email = r)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            ref={(r) => (inputsRef.current.signUp.password = r)}
          />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignIn;
