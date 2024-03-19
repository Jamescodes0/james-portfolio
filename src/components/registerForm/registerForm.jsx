"use client";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./registerForm.module.css";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="Retype password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error && <div className={styles.errorMessage}>{state.error}</div>}
      <Link href="/login" className={styles.loginLink}>
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
