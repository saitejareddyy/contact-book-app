import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddContactPage from "./pages/AddContactPage"
import Navbar from "./components/Navbar"
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-contact" element={<AddContactPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
