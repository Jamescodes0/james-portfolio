import LoginForm from "@/components/loginForm/loginForm";
import { handleGitHubLogin } from "@/lib/action";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGitHubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
