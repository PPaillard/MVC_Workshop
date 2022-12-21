import { createContext, useContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const CurrentUserContext = createContext()

export default CurrentUserContext

export const CurrentUserContextProvider = ({ children }) => {
  // on utilise un hook personnalisé
  const [user, setUser] = useLocalStorage("user",{})
  const [token, setToken] = useLocalStorage("token","")

  return (
    <CurrentUserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUserContext = () => useContext(CurrentUserContext);