import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import './MakePayment.css'
import { useContext } from "react";
import { UserContext } from "../../../App";


const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
    );

    return options;
};

const MakePayment = ({ billing_details, order }) => {
    const[loggeInUser,setLoggedInUser]=useContext(UserContext);

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });


        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
            console.log('[error]', error);
        } else {
            paymentMethod.billing_details = billing_details;
            paymentMethod.order=order;
            paymentMethod.created=new Date();
            paymentMethod.userEmail=loggeInUser.email;
            paymentMethod.status='Pending';
            setPaymentSuccess(paymentMethod);
            setPaymentError(null);
            console.log('[PaymentMethod]', paymentMethod);
        }

        fetch('https://guarded-spire-38401.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentMethod),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Card number
                        <CardNumberElement
                        options={options}
                    />
                </label>
                <br></br>
                <label>
                    Expiration date
                        <CardExpiryElement
                        options={options}
                    />
                </label>
                <br></br>
                <label>
                    CVC
                    <CardCvcElement
                        options={options}
                    />
                </label>
                <br></br>
                <button className='btn btn-prime' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <br></br>
            {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
            {paymentSuccess && <p style={{ color: 'green' }}>Your payment has received successfully</p>}

        </div>

    );
};

export default MakePayment;
