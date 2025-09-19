import { Search } from "lucide-react"

function Navbar() {
  return (
    <div className="flex justify-between items-center m-5 pb-3 border-b border-gray-400">
      <h1 className="text-3xl font-bold text-black">Contact</h1>
      <div className="flex items-center gap-6">
        <Search className="w-6 h-6 text-black cursor-pointer hover:text-gray-600 transition" />
        <button className="px-4 py-2 border-2 border-black text-black font-semibold rounded-2xl hover:bg-black hover:text-white transition">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
