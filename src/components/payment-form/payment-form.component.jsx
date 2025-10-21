// Elements is a Provider that provides access of data to all children of ELements
// Cards, etc are all children of Elements PRovider
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    // fetch req to back end for payment intent
    

  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <button type="submit">PAY NOW</button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
