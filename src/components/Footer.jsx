import { ThemeContext } from "../Context/ThemeContext"
import { useContext } from "react"

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)
  console.log(useContext(ThemeContext))
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  return(
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? 'black' : 'green'
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  )
}

export default Footer