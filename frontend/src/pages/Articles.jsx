import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Article from "../components/Article"

function Articles() {
  const [articles, setArticles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // recupération des articles.
    const myHeader = new Headers()
    myHeader.append("Authorization","Bearer " + localStorage.getItem("token"))

    const requestOptions = {
      headers : myHeader
    }

    fetch("http://localhost:5000/api/articles", requestOptions)
    .then(response=>response.json())
    .then(article_list=>setArticles(article_list))
    .catch(error=>{
      navigate("/login")
    })
  }, [])

  return (
    <div>
      <h1 className="text-center my-3">Articles</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Articles
