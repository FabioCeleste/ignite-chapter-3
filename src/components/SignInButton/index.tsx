import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, useSession } from "next-auth/react";

export function SignInButton() {
  const session = useSession();

  return session.status == "authenticated" ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      {session.data.user?.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#eba471" />
      Sign In with Github
    </button>
  );
}
