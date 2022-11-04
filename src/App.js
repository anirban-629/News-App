import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [pageSize, setPageSize] = useState(20);
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const setProgressBar = (increment) => {
    setProgress(increment);
  };

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={setProgressBar}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgressBar}
                key="general"
                category="general"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgressBar}
                key="business"
                category="business"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgressBar}
                key="entertainment"
                category="entertainment"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgressBar}
                key="science"
                category="science"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgressBar}
                key="health"
                category="health"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgressBar}
                key="sports"
                category="sports"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgressBar}
                key="technology"
                category="technology"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/coding"
            element={
              <News
                setProgress={setProgressBar}
                key="coding"
                category="coding"
                apiKey={apiKey}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
