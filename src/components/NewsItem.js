import React from "react";

export default function NewsItem(props) {
  let { title, img, content, link, badge, timeOfPublish, author } = props;
  return (
    <div className="container mt-4">
      <div className="card container" style={{ width: "18rem" }}>
        <img
          src={img}
          className="card-img-top"
          alt="..."
          onError={(event) => {
            event.target.src =
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
            event.onerror = null;
          }}
        />
        <div className="card-body">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ right: "-10px" }}
          >
            {badge}
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">
            {title === "" || null || undefined ? " " : title}
          </h5>
          <p className="card-text">
            {content === "" || null || undefined ? "..." : content}
          </p>
          <footer className="blockquote-footer mt-3">
            {" "}
            By {author ? author.slice(0, 12) : "Unknown"}, &nbsp;
            <br />
            {new Date(timeOfPublish).toUTCString()}
          </footer>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
