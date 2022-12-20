import { useEffect, useState } from "react"

import Article from "../components/Article"

function Articles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // recupération des articles.
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
