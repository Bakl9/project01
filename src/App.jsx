 import { Header } from "./components/Header"
 import { Main } from "./components/Main"
 import { Footer } from "./components/Footer"

function App() {
    return (
      <div>
        <Header />
        <Main 
          name={'Ilysha'}
          age={26}
          house={'Moscow'}
          love={'bicycle'}
          hobby={'photo'}
        />
        <Footer /> 

      </div>
    )
  }

  export default App;