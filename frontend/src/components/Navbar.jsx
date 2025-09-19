import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center m-4 sm:m-5 pb-3 border-b border-gray-400">
      <Link to={"/"} className="text-2xl sm:text-3xl font-bold cursor-pointer mb-3 sm:mb-0">
        Contact Book
      </Link>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <Link
          to={"/add-contact"}
          className="px-4 py-2 text-lg sm:text-xl text-black font-semibold rounded hover:bg-black hover:text-white transition cursor-pointer text-center w-full sm:w-auto"
        >
          Add Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar
