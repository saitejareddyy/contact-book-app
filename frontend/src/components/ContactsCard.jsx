import { Trash2 } from "lucide-react"
import { deleteContact } from "../api/ContactsApi"
import { UseStore } from "../context/contactContext";
import toast from "react-hot-toast";

function ContactsCard({ contact }) {
    const { contacts, setContacts } = UseStore();

    const handleDelete = async () => { 
        const response = await deleteContact(contact._id);
        setContacts(contacts.filter(c => c._id !== contact._id))
        if(response.data.success){
          toast.success(response.data.message);
        }
    }
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-xl px-5 py-4 border border-gray-200 hover:shadow-lg transition">
      
      {/* Contact Info */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">UserName: {contact.name}</h2>
        <p className="text-gray-600">Email: {contact.email}</p>
        <p className="text-gray-500">Phone No: {contact.phone}</p>
      </div>

      {/* Delete Button */}
      <button onClick={handleDelete} className="bg-black hover:bg-red-600 text-white p-2 rounded-lg transition">
        <Trash2 size={20} />
      </button>
    </div>
  )
}

export default ContactsCard
