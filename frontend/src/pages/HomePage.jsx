import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <>
      <Navbar />
      <div className='h-screen w-full flex justify-center items-center'>
        <h1 className='text-red-500 text-7xl'>Hello World!</h1>
      </div>
    </>
  )
}

export default HomePage
