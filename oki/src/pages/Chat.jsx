import React, { useState } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [recipientId, setRecipientId] = useState('');

    const handleMessageSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '' && recipientId.trim() !== '') {
            // Check if the recipient ID already exists in messages
            const existingMessageIndex = messages.findIndex(msg => msg.id === recipientId);
            if (existingMessageIndex === -1) {
                // If recipient ID does not exist, add a new message
                setMessages([...messages, { id: recipientId, message: inputValue }]);
            } else {
                // If recipient ID already exists, update the existing message
                const updatedMessages = [...messages];
                updatedMessages[existingMessageIndex].message = `${updatedMessages[existingMessageIndex].message}, ${inputValue}`;
                setMessages(updatedMessages);
            }

            setInputValue('');
        }
    };

    return (
        <div className=' pt-1 pb-[135px]' style={{ backgroundImage: "url(src/assets/Smoke3.jpg)", backgroundSize: "cover" }}>
            <div className="max-w-[650px] h-[450px] mt-[140px] mx-auto bg-gray-100 rounded-lg shadow-lg ">
                <h1 className="text-3xl font-bold mt-4 pt-[10px] mb-4 text-center">Chat Box</h1>
                <form onSubmit={handleMessageSubmit} className="flex flex-col items-center">
                    <div className="mb-4 w-[500px]  flex items-center">
                        <label htmlFor="recipientId" className="mr-[60px]">Recipient ID:</label>
                        <input
                            type="text"
                            id="recipientId"
                            value={recipientId}
                            onChange={(e) => setRecipientId(e.target.value)}
                            placeholder="Recipient ID"
                            className="w-[320px] ml-[20px] bg-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                    <div className="mb-4 w-[500px] flex items-center">
                        <label htmlFor="messageInput" className=" mr-2">Type your message:</label>
                        <input
                            type="text"
                            id="messageInput"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                            className="w-[320px] ml-[20px] bg-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                    <div className="w-full mb-4 flex items-center">
                        <button
                            type="submit"
                            className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Send
                        </button>
                    </div>
                </form>
                <div className="border border-gray-300 p-4 ml-[50px] mr-[50px] mb-4 rounded-[5px] overflow-auto max-h-[200px]">
                    {Object.entries(
                        messages.reduce((acc, message) => {
                            if (!acc[message.id]) {
                                acc[message.id] = [];
                            }
                            acc[message.id].push(message.message);
                            return acc;
                        }, {})
                    ).map(([id, messageArray]) => (
                        <div key={id} className="mb-2">
                            <strong className="block text-blue-600">Recipient ID:</strong>
                            <span className="text-gray-700">{id}</span>
                            {messageArray.map((message, index) => (
                                <div key={index}>
                                    <strong className="block text-blue-600">Message:</strong>
                                    <span className="text-gray-700">{message}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}   
