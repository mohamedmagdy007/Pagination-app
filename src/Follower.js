import React from "react";

export default function Follower({ avatar_url, html_url, login }) {
  return (
    <div className="rounded-md shadow-md bg-indigo-100 text-center py-4">
      <img
        className="rounded-full h-24 w-24 mx-auto"
        src={avatar_url}
        alt={login}
      />
      <h3 className="my-1 text-gray-700 font-bold">{login}</h3>
      <a
        href={html_url}
        className="bg-blue-400 rounded-lg py-1 px-2 text-white"
      >
        View profile
      </a>
    </div>
  );
}
