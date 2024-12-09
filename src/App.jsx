import { useState } from "react"
import logo from "./assets/WhatsApp Image 2024-12-09 at 11.23.54.jpeg"
import NavItems from "./components/NavItems"
function App() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const menu  = [
    {
      title: "Dashboard",
      link: "#"
    },
    {
      title: "Transfer",
      link: "#"
    },
    {
      title: "Topup",
      link: "#"
    },
    {
      title: "Sign out",
      link: "#"
    },
  ]
  
  return (
    <>
      <nav className = "flex items-center w-screen justify-between bg-white py-4 px-8">
        <img src={logo} />
        <div className = "flex gap-x-8">
        <NavItems 
          menu={menu} 
          activeTab={activeTab} 
          handleClick={setActiveTab}
        />
          {/* <Container>
            <navItems menu={menu} />
          </Container> */}
        </div>
      </nav>
    </>
  )
}

export default App