import { useEffect, useState } from "react";
import API from "../api";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await API.get("/items/", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookmarks(res.data);
      } catch (err) {
        setError("Failed to load bookmarks");
        console.error(err);
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <div className="bookmarks-page">
      <h2>My Bookmarks</h2>
      {error && <p className="error">{error}</p>}
      {bookmarks.length === 0 ? (
        <p>No bookmarks saved yet.</p>
      ) : (
        <ul>
          {bookmarks.map((item) => (
            <li key={item.id}>
              <strong>{item.github_username}</strong> - {item.note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bookmarks;
