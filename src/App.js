import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import User from "./User";

const App = () => {
  const { loading, data } = useFetch();
  // console.log(data);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, data, page]);

  const prevBtn = () => {
    setPage((prevValue) => {
      let newPage = prevValue - 1;
      if (newPage < 0) {
        newPage = data.length - 1;
      }
      return newPage;
    });
  };

  const handleClick = (index) => {
    setPage(index);
  };

  const nextBtn = () => {
    setPage((prevValue) => {
      let newPage = prevValue + 1;
      if (newPage > data.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
      </div>

      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <User key={follower.id} {...follower} />;
          })}
        </div>
      </section>

      {!loading && (
        <div className="btn-container">
          <button className="prev-btn" onClick={prevBtn}>
            prev
          </button>
          {data.map((btn, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handleClick(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextBtn}>
            next
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
