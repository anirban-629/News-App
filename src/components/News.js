import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstLetter(props.category)} - Headlines`;

  const updateNews = async () => {
    props.setProgress(10);

    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=b42c065470d344dc83b71dd672315995&page=${page}`;

    // let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let response = await data.json();
    props.setProgress(75);
    setArticles(response.articles);
    setTotalResults(response.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    page === 5 ? setPage(5) : setPage(page + 1);

    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=b42c065470d344dc83b71dd672315995&page=${page}`;

    // let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page}`;
    let data = await fetch(url);
    let response = await data.json();
    setArticles(articles.concat(response.articles));
    setTotalResults(response.totalResults);
  };

  return (
    <>
      <header className="mt-4">
        <h2 className="text-center">News - Top Headlines</h2>
        <h4 className="text-center">
          Topic - <strong> {props.category.toUpperCase()}</strong>
        </h4>
      </header>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <main className="container mt-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div
                  className="col-lg-3"
                  key={`${element.publishedAt}+${Math.random() + 1000}`}
                >
                  <NewsItem
                    title={element.title.slice(0, 30) + "..."}
                    img={element.urlToImage}
                    link={element.url}
                    content={element.content.slice(0, 100) + "..."}
                    badge={element.source.name}
                    timeOfPublish={element.publishedAt}
                    author={element.author}
                  />
                </div>
              );
            })}
          </div>
        </main>
      </InfiniteScroll>
    </>
  );
}
