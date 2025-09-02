import './App.css'
import avatar from './assets/avatar.png'

function App() {

  return (
    <>
    <main>
      <div className="flex flex-col md:flex-row w-screen h-screen items-center md:items-start justify-center md:justify-between md:p-8">
        <div className="order-2 md:order-1 flex flex-col justify-center md:justify-between md:min-h-screen items-center">

          <div className="md:pl-[100px] md:pt-[100px]">
            <h1 className="text-4xl font-bold">Hello!</h1>
            <h1 className="text-4xl font-bold">I'm Mike Evans</h1>
            <h2 className="text-2xl font-semibold text-gray-600">Full Stack Developer</h2>
          </div>
          
          <div className="mt-4 md:mb-10 md:pb-10 md:pl-[100px]">
            <a href="#projects" className="md:inline-block min-w-[300px] text-center md:px-4 md:py-2 border-2 border-black text-black rounded hover:bg-green-600 transition">
              View Projects
            </a>
          </div>

        </div>

        <div className="order-1 md:order-2 pb-[100px]">
          <img src={avatar} alt="Avatar" className="rounded-full md:mb-4" />
        </div>
      </div>

      <div className="flex flex-col w-screen h-screen items-center justify-start bg-gray-100" id="projects">
        <h1 className="text-4xl font-bold pt-8">My Projects:</h1>
      </div>
    </main>
    </>
  )
}

export default App
