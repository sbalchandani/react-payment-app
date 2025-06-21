import React, { useState } from "react";

function PaymentForm() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        creditCardNumber: "",
        expiry: "",
        cvv: "",
        amount: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://3.88.137.191:8080/api/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            if (response.ok) {
                alert('Payment submitted!');
            } else {
                alert('Payment failed.');
            }
        } catch (error) {
            alert('Error submitting payment.');
        }
        // Here you would handle form submission (e.g., send to backend)
    };

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Name:<br />
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={{ width: "100%" }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Address:<br />
                        <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            style={{ width: "100%" }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Amount:<br />
                        <input
                            type="number"
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                            required
                            min="0"
                            step="0.01"
                            style={{ width: "100%" }}
                            placeholder="Enter amount"
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>
                        Card Number:<br />
                        <input
                            type="text"
                            name="creditCardNumber"
                            value={form.creditCardNumber}
                            onChange={handleChange}
                            required
                            maxLength={16}
                            pattern="\d{16}"
                            style={{ width: "100%" }}
                            placeholder="1234 5678 9012 3456"
                        />
                    </label>
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                    <label style={{ flex: 1 }}>
                        Expiry:<br />
                        <input
                            type="text"
                            name="expiry"
                            value={form.expiry}
                            onChange={handleChange}
                            required
                            maxLength={5}
                            pattern="\d{2}/\d{2}"
                            placeholder="MM/YY"
                            style={{ width: "100%" }}
                        />
                    </label>
                    <label style={{ flex: 1 }}>
                        CVC:<br />
                        <input
                            type="text"
                            name="cvv"
                            value={form.cvv}
                            onChange={handleChange}
                            required
                            maxLength={4}
                            pattern="\d{3,4}"
                            style={{ width: "100%" }}
                            placeholder="123"
                        />
                    </label>
                </div>
                <button type="submit" style={{ width: "100%", padding: 10 }}>Submit Payment</button>
            </form>
        </div>
    );
}

export default PaymentForm;