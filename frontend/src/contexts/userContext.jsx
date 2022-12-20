import { createContext, useState, useContext } from "react"

const CurrentUserContext = createContext()

export default CurrentUserContext

export const CurrentUserContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useCurrentUserContext = () => useContext(CurrentUserContext);