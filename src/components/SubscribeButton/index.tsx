import { useSession, signIn } from "next-auth/react";
import { api } from "../../services/api";
import { loadStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const session = useSession();

  async function handleSubscribe() {
    if (session.status === "unauthenticated") {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await loadStripeJs();

      stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <button
      onClick={handleSubscribe}
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe Now
    </button>
  );
}
