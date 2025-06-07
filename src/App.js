import React from "react";
import PaymentForm from "./components/PaymentForm";

function OrderSummary() {
    const price = 75;
    const tax = price * 0.10;
    const shipping = 0;
    const total = price + tax + shipping;

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8, marginBottom: 24 }}>
            <h2>Order Summary</h2>
            <div style={{ marginBottom: 8 }}>
                <strong>Item:</strong> Levis Jeans<br />
                <strong>Size:</strong> 34X32
            </div>
            <div style={{ marginBottom: 8 }}>
                <strong>Price:</strong> ${price.toFixed(2)}
            </div>
            <div style={{ marginBottom: 8 }}>
                <strong>Tax (10%):</strong> ${tax.toFixed(2)}
            </div>
            <div style={{ marginBottom: 8 }}>
                <strong>Shipping:</strong> Free
            </div>
            <div style={{ marginTop: 12, fontWeight: "bold" }}>
                Total: ${total.toFixed(2)}
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <OrderSummary />
            <PaymentForm />
        </div>
    );
}

export default App;