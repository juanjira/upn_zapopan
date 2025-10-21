import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { EventsBanner } from './components/EventsBanner'
import { Facebook } from './components/Facebook'


function App() {
  

  return (
    <div className="min-h-screen">
     <Header />    
     <main>
      <Home />   
      <EventsBanner />
      <Facebook />
     </main>     
     <Footer />
    </div>

  )
}

export default App
