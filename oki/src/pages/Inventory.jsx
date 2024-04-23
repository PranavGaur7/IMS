import React, { useState } from 'react';

export default function Inventory() {
    const [items, setItems] = useState([
        { id: 1, name: 'Product 1', description: 'Description for Product 1', quantity: 10, price: 50 },
        { id: 2, name: 'Product 2', description: 'Description for Product 2', quantity: 20, price: 30 },
        { id: 3, name: 'Product 3', description: 'Description for Product 3', quantity: 15, price: 40 },
    ]);

    const [newItem, setNewItem] = useState({
        id: '',
        name: '',
        description: '',
        quantity: '',
        price: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const { id, name, description, quantity, price } = newItem;
        const newId = parseInt(id);
        const newQuantity = parseInt(quantity);
        const newPrice = parseFloat(price);

        const existingItemIndex = items.findIndex(item => item.id === newId);
        const updatedItems = [...items];
        if (existingItemIndex !== -1) {
            updatedItems[existingItemIndex] = { ...newItem, quantity: newQuantity, price: newPrice };
        } else {
            updatedItems.push({ ...newItem, quantity: newQuantity, price: newPrice });
        }

        setItems(updatedItems);
        setNewItem({ id: '', name: '', description: '', quantity: '', price: '' });
    };

    const handleInputChange = (event, field) => {
        const { value } = event.target;
        setNewItem({ ...newItem, [field]: value });
    };

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className=' pt-1 pb-[82px]' style={{ backgroundImage: "url(src/assets/Wood.jpg)", backgroundSize: "cover" }}>
            <div className=" bg-gray-100 max-w-screen-md mt-20 p-8 pt-8 border border-gray-300 rounded mx-auto ">
                <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="mb-4 flex items-center">
                        <label htmlFor="id" className="min-w-[80px] mr-2">Item Id:</label>
                        <input
                            type="text"
                            id="id"
                            className="p-2 border border-gray-300 rounded mr-2"
                            placeholder="ID"
                            value={newItem.id}
                            onChange={(e) => handleInputChange(e, 'id')}
                        />
                        <label htmlFor="name" className="min-w-[80px] mr-2">Product Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="w-[185px] p-2 border border-gray-300 rounded"
                            placeholder="Product Name"
                            value={newItem.name}
                            onChange={(e) => handleInputChange(e, 'name')}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label htmlFor="description" className="min-w-[80px] mr-2">Description:</label>
                        <input
                            type="text"
                            id="description"
                            className="w-[515px] p-2 border border-gray-300 rounded"
                            placeholder="Description"
                            value={newItem.description}
                            onChange={(e) => handleInputChange(e, 'description')}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label htmlFor="quantity" className="min-w-[80px] mr-2">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            className="p-2 border border-gray-300 rounded mr-2"
                            placeholder="Quantity"
                            value={newItem.quantity}
                            onChange={(e) => handleInputChange(e, 'quantity')}
                        />
                        <label htmlFor="price" className="min-w-[80px] mr-2">Price:</label>
                        <input
                            type="number"
                            id="price"
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Price"
                            value={newItem.price}
                            onChange={(e) => handleInputChange(e, 'price')}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 mx-auto bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
                <table className="w-full mt-8 border-collapse">
                    <thead>
                        <tr>
                            {['Item ID', 'Product Name', 'Description', 'Quantity', 'Price'].map(header => (
                                <th key={header} className="border border-gray-300 py-2 px-4 bg-gray-100 text-left">{header}</th>
                            ))}
                            <th className="border border-gray-300 py-2 px-4 bg-gray-100 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                {Object.entries(item).map(([key, value], index) => (
                                    <td key={index} className="border border-gray-300 py-2 px-4">
                                        {key === 'price' ? `$${value}` : value}
                                    </td>
                                ))}
                                <td className="border border-gray-300 py-2 px-4">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
