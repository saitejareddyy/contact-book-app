import Navbar from '../components/Navbar'
import { Search } from 'lucide-react'  
import { UseStore } from '../context/contactContext'
import ContactsCard from '../components/ContactsCard'

function HomePage() {
  const { contacts } = UseStore();

  return (
    <>
      <div className="min-h-screen w-full pb-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mt-20 text-center">
          ✳︎ MY CONTACTS
        </h1>
        <p className="text-lg sm:text-xl text-[#260000] mt-2 text-center">
          Advanced contact application for users
        </p>

        <div className="mt-8 sm:mt-10 w-full sm:w-[80%] md:w-[70%] max-w-2xl flex flex-col sm:flex-row items-center">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full border border-gray-300 rounded-xl sm:rounded-r-none px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-black bg-white shadow-sm"
          />
          <button className="bg-black hover:bg-black/70 px-4 py-2 rounded-xl sm:rounded-l-none text-white flex items-center justify-center transition w-full sm:w-auto">
            <Search size={20} />
          </button>
        </div>

        <div className="mt-8 sm:mt-10 w-full sm:w-[80%] md:w-[70%] max-w-3xl grid gap-4">
          {contacts?.length > 0 ? (
            contacts.map((contact, idx) => (
              <ContactsCard key={idx} contact={contact} />
            ))
          ) : (
            <p className="text-gray-500 text-lg text-center">
              No contacts found. Add some!
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
