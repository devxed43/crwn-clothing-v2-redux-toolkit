import { loadStripe } from "@stripe/stripe-js";

// the secret variable gets merged with the process environment
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
