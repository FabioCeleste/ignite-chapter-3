import { loadStripe, Stripe } from "@stripe/stripe-js";

export async function loadStripeJs() {
  const stripeJs: Stripe = (await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
  )) as Stripe;

  return stripeJs;
}
