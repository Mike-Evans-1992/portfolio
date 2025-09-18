import './App.css'
import avatar from '/avatar.png'
import vacationApp from '/vacationApp.png'
import logo from '/logo.webp'
import lettersToSantaMP4 from '/media/letters-to-santa.mp4'
import lettersToSantaWEBM from '/media/letters-to-santa.webm'
import lettersToSanta from '/media/letters-to-santa.jpg'

function App() {

  return (
    <>
    <main>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row w-screen h-screen items-center md:items-start justify-center md:justify-between md:p-8">
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
      </section>

      {/* Projects Section */}
      <section className="flex flex-col w-screen h-screen items-center justify-start bg-gray-100" id="projects">
        <h1 className="text-4xl font-bold pt-8">My Projects:</h1>
        {/* Grid to hold projects */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          {/* SimplizityLife Project */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">SimplizityLife</h2>
            <p className="text-gray-700 mb-4">Technologies: Angular, React, Firebase, Firestore, Firebase Auth, CDKDragDrop</p>
            <p className="text-gray-700 mb-4">
              A family-focused web application designed to organize daily routines and tasks. Core features include:
              <ul className="list-disc list-inside">
                <li>Event Calendar: Color-coded events by family member.</li>
                <li>Chores & Rewards: Assign chores, track points, and redeem custom rewards.</li>
                <li>Annual Chores: Automatically added to chore screen by month.</li>
                <li>Meal Planner & Shopping List: Add shopping items directly from recipe cards.</li>
                <li>Drag & Drop: Intuitive management for chores, rewards, and meals.</li>
              </ul>
            </p>
            <a 
              href="https://simplizitylife.com" 
              target="_blank" rel="noopener noreferrer" 
              className=
                "pt-6 items-center justify-center flex flex-col md:relative md:top-[80px]"
            >
              <img src={logo} alt="SimplizityLife Logo" className="mb-4 rounded w-[250px] h-[100px]" />
            </a>
            <p className="pt-6 text-center text-xs md:relative md:top-[232px]">Click image to visit site</p>
          </div>

          {/* Android Vacation Tracking Project */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Android Vacation Tracker</h2>
            <p className="text-gray-700 mb-4">Technologies: Java, Android, Gradle, SQLite, Room</p>
            <p className="text-gray-700 mb-4">
              A mobile application that helps users organize vacations and planned excursions. Core features include:
              <ul className="list-disc list-inside">
                <li>Add, edit, and delete vacations and activities</li>
                <li>View details in a clean and structured format</li>
                <li>Share vacation plans through SMS w/ formatted text</li>
              </ul>
            </p>
            <a href="/app-release.apk" download className="md:relative md:top-[50px] items-center justify-center flex flex-col">
              <img src={vacationApp} alt="Android Vacation Tracker" className="mb-4 rounded w-[150px] h-[300px]" />
            </a>
            <p className="md:relative md:top-[132px] text-center text-xs">Click image to download APK</p>
          </div>

          {/* Letters to Santa Project */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Android Vacation Tracker</h2>
            <p className="text-gray-700 mb-4">Technologies: Android, Kotlin, Jetpack Compose, Google OAuth, Google Drive Integration</p>
            <p className="text-gray-700">
              A mobile application that allows children to send letters to Santa digitally. Core features include:
              <ul className="list-disc list-inside">
                <li>Write a Letter: Upload an image of a handwritten letter or type out a letter.</li>
                <li>Your Letters: Read the letters that you wrote to Santa. Parents have easy access to child's wish list.</li>
                <li>Directions: Give Santa delivery instructions for houses with or without a Chimney.</li>
              </ul>
            </p>
            <div className="items-center justify-center flex flex-col">  {/*TODO: change to a tag to download apk when apk is ready*/}
              <video
                className="mb-4 rounded w-[200px] h-[400px]"
                autoPlay
                loop
                muted
                playsInline
                poster={lettersToSanta}>
                <source src={lettersToSantaMP4} type="video/mp4" />
                <source src={lettersToSantaWEBM} type="video/webm" />
              </video>  
            </div>
            <p className="text-center text-xs">
              <span className="text-xl">🚧</span> App in Development: APK coming soon. <span className="text-xl">🚧</span></p>
            
          </div>

        </div>  
      </section>
    </main>
    </>
  )
}

export default App
