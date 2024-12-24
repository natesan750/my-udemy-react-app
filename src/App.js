import Navbar from "./components/Navbar.js"
import Categories from "./components/Categories.js"
import Sale from "./components/Sale.js"
import Recommended from "./components/Recommended.js"
import Topics from "./components/Topics.js"
import Footer from "./components/Footer.js"


function App() {
    return (
        <>
           <Navbar></Navbar>
           <Categories></Categories>
           <Sale></Sale>
           <Recommended></Recommended>
           <Topics></Topics>
           <Footer></Footer>
        </>
    )
}

export default App