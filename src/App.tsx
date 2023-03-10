import './App.css'
import Footer from "./view/components/footer"
import Header from "./view/components/header"
import Main from "./view/components/main"
import PopMenu from "./view/components/pop-menu"
import Print from "./view/print-comp/print"

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopMenu />
      <Print />
    </>
  )
}

export default App
