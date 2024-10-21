import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const BillingPage = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Create a payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                email: email,
            },
        });

        if (error) {
            setError(error.message);
            setSuccess(false);
        } else {
            // You can call your backend here to save the paymentMethod.id and other details
            console.log('Payment Method Created:', paymentMethod);
            setSuccess(true);
            setError(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
            <div className="bg-white rounded-lg shadow-md p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Billing Details</h2>
                {success && <p className="text-green-500 mb-4">Payment successful! Thank you!</p>}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Card Details</label>
                        <CardElement className="border p-2 rounded-md" />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full"
                        disabled={!stripe}
                    >
                        Pay $25
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BillingPage;
