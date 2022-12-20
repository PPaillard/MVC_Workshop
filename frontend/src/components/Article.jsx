function Article({ article }) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.content}</p>
      </div>
    </div>
  )
}

export default Article
