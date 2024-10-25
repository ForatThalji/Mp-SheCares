import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalCheckoutButton = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AYnzVEObmnyuNDN4FBPKSqinCbKh7UwO3m5qeUkH6R6wknTw0ECuqp63tmy714ZzsyutrUTHELbmbD9W" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "100.00", // Replace with the actual price
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            // Optionally send the payment details to your backend
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckoutButton;
    