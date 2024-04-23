import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
// import background from './assets/bg.jpg';

export default function BillForm() {
    const [customerName, setCustomerName] = useState('');
    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productRate, setProductRate] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');

    const generatePDF = () => {
        const doc = new jsPDF();

        // Set font and text color
        doc.setFont('helvetica');
        doc.setTextColor(40, 40, 40); // Dark gray color

        // Draw border with border radius

        doc.roundedRect(10, 10, 190, 280, 5, 5);

        // Center-aligned title
        const titleWidth = doc.getStringUnitWidth("Bill") * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const titleX = (doc.internal.pageSize.width - titleWidth) / 2;
        doc.text(titleX, 20, "Bill");

        // Calculations
        const totalPrice = productQuantity * productRate;
        const taxAmount = totalPrice * 0.18;
        const totalPriceWithTax = totalPrice + taxAmount;

        // Generating PDF
        doc.text(20, 30, `Customer Name: ${customerName}`);
        doc.text(20, 40, `Delivery Address: ${deliveryAddress}`);
        doc.text(20, 50, `Shipping Address: ${shippingAddress}`);
        // Define box dimensions
        const boxX = 20;
        const boxY = 60;
        const boxWidth = 100;
        const boxHeight = 65;

        // Draw box around product details
        doc.rect(boxX, boxY, boxWidth, boxHeight);

        // Place product details inside the box
        doc.text(boxX + 5, boxY + 10, `Product Name: ${productName}`);
        doc.text(boxX + 5, boxY + 20, `Product Quantity: ${productQuantity}`);
        doc.text(boxX + 5, boxY + 30, `Product Rate: ${productRate}`);
        doc.text(boxX + 5, boxY + 40, `Total Price (Without Tax): ${totalPrice}`);
        doc.text(boxX + 5, boxY + 50, `Tax (18%): ${taxAmount}`);
        doc.text(boxX + 5, boxY + 60, `Total Price (With Tax): ${totalPriceWithTax}`);


        // Save the PDF with customer name as file name
        doc.save(`${customerName}_bill.pdf`);
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-300 to-black-800">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold mb-4">Bill Form</h1>
                <form className="space-y-4">
                    <div className="flex items-center">
                        <label className="block text-gray-700 mr-2 w-36">Customer Name:</label>
                        <input
                            className="bg-gray-200 rounded-md px-4 py-2 w-64 focus:outline-none focus:bg-gray-300 focus:border-gray-500"
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700 mr-2 w-36">Product Name:</label>
                        <input
                            className="bg-gray-200 rounded-md px-4 py-2 w-64 focus:outline-none focus:bg-gray-300 focus:border-gray-500"
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700 mr-2 w-36">Product Quantity:</label>
                        <input
                            className="bg-gray-200 rounded-md px-4 py-2 w-64 focus:outline-none focus:bg-gray-300 focus:border-gray-500"
                            type="number"
                            value={productQuantity}
                            onChange={(e) => setProductQuantity(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700 mr-2 w-36">Product Rate:</label>
                        <input
                            className="bg-gray-200 rounded-md px-4 py-2 w-64 focus:outline-none focus:bg-gray-300 focus:border-gray-500"
                            type="number"
                            value={productRate}
                            onChange={(e) => setProductRate(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700 mr-2 w-36">Delivery Address:</label>
                        <textarea
                            className="bg-gray-200 rounded-md px-4 py-2 w-64 focus:outline-none focus:bg-gray-300 focus:border-gray-500"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700 mr-2 w-36">Shipping Address:</label>
                        <textarea
                            className="bg-gray-200 rounded-md px-4 py-2 w-64 focus:outline-none focus:bg-gray-300 focus:border-gray-500"
                            value={shippingAddress}
                            onChange={(e) => setShippingAddress(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={generatePDF}
                        >
                            Generate PDF
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

