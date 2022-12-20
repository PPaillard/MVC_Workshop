import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCurrentUserContext } from "../contexts/userContext"



function Login() {
  const { setUser} = useCurrentUserContext()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const body = JSON.stringify({
      email, password
    })

    const requestOptions = {
      method : "POST",
      headers : myHeaders,
      body
    }

    if (email && password) {
      // on appelle le back
      fetch("http://localhost:5000/api/login", requestOptions)
      .then(response => response.json())
      .then(result=>{
        setUser(result.user)
        navigate("/")
      })
      .catch(console.error)
    } else {
      alert("Please specify email and password")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "18rem" }}
      className="m-auto mt-5"
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Connexion
      </button>
    </form>
  )
}

export default Login
