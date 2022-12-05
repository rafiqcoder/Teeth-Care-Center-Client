import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({data}) => {
    const [cardError,setCardError] = useState("");
    const [success,setSuccess] = useState('')
    const [transectionId, setTransectionId] = useState("");
  const stripe = useStripe();
    const elements = useElements();
      const { price, patientName, email,treatmentName,_id } = data;

     const [clientSecret, setClientSecret] = useState("");
  
     useEffect(() => {
       // Create PaymentIntent as soon as the page loads
       fetch("https://teeth-cares-server.vercel.app/create-payment-intent", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ price }),
       })
         .then((res) => res.json())
         .then((data) => setClientSecret(data.clientSecret));
     }, [price]);


    const handleSubmit = async (event) => {
    
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
        console.log("[error]",error);
        setCardError(error.message)
         if (error.type === "card_error" || error.type === "validation_error") {
           setCardError(error.message);
         } else {
           setCardError("An unexpected error occurred.");
         }
    } else {
        console.log("[PaymentMethod]",paymentMethod);
        setCardError('');
        }

          setSuccess("");
       const { paymentIntent, error:ConfirmError } = await stripe.confirmCardPayment(
         clientSecret,
         {
           payment_method: {
             card: card,
             billing_details: {
                 name: patientName,
                 email: email,
                
             },
           },
         }
        );
        if (ConfirmError) {
            setCardError(ConfirmError.message);
            return;
        }
        if (paymentIntent.status==='succeeded') {
            setSuccess('Congrates ! Your payment completed')
            setTransectionId(paymentIntent.id)
        }
        console.log('paymentIntent',paymentIntent);
  };
  return (
      <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-5">Treatment: {treatmentName}</h2>
          <h2 className="text-lg font-semibold mb-5">Price: {price}</h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn btn-success mt-10"
      >
        Pay
      </button>
      <p className="text-warning">{cardError}</p>
      <p className="text-success">{success&&success}</p>
      <p className="text-success">{transectionId}</p>
    </form>
  );
};

export default CheckoutForm;
