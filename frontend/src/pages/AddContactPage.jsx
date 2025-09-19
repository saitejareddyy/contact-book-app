import { useState } from "react";
import { addContact } from "../api/ContactsApi";
import toast from "react-hot-toast";
import { UseStore } from "../context/contactContext";

function AddContactPage() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const { setContacts } = UseStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addContact({ name, email, phone });
            if(response.data.success) {
                setContacts(prev => [...prev, response.data.data]);
                toast.success(response.data.message);
                setName('');
                setEmail('');
                setPhone('');
            } 
        } catch(error) {
            console.log("Add error:", error);
            toast.error(error.response?.data?.message || "Failed to add contact");
        }
    }
    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-medium mt-24 text-center">
                ADD NEW CONTACT
            </h1>

            <form onSubmit={handleSubmit} className="mt-10 w-full sm:w-[80%] md:w-[50%] lg:w-[40%] bg-white shadow-md rounded-xl p-8 flex flex-col gap-5">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                    type="text"
                    placeholder="phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-black"
                />

                <button
                    type="submit"
                    className="bg-black text-white text-lg font-semibold py-2 rounded-lg hover:bg-black/80 transition"
                >
                    Add Contact
                </button>
            </form>
        </div>
    )
}

export default AddContactPage
