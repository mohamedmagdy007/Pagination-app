import React, { useState, useEffect } from "react";
import FetchData from "./FetchData";
import Follower from "./Follower";
export default function Home() {
  const { loading, data } = FetchData();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  const nextPage = () => {
    setPage((oldpage) => {
      let nextpage = oldpage + 1;
      if (nextpage > data.length - 1) {
        nextpage = 0;
      }
      return nextpage;
    });
  };
  const prevPage = () => {
    setPage((oldpage) => {
      let prevpage = oldpage - 1;
      if (prevpage < 0) {
        prevpage = data.length - 1;
      }
      return prevpage;
    });
  };
  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-blue-900 mt-5 text-5xl">
        {loading ? "loading..." : "Pagination"}
      </h1>
      <div className="rounded h-1 w-24 mx-auto my-6 bg-blue-500"></div>
      <main className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />;
        })}
      </main>
      {!loading && (
        <footer className="container mx-auto px-4 ">
          <div className="flex justify-center items-center my-6 flex-wrap">
            <button className="mt-2 font-bold" onClick={prevPage}>
              Prev
            </button>

            {data.map((item, index) => {
              return (
                <button
                  className={`py-1 px-3 mx-2 mt-2 rounded-md text-white  ${
                    index === page ? "bg-indigo-900" : "bg-indigo-500"
                  }`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="mt-2 font-bold" onClick={nextPage}>
              Next
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
