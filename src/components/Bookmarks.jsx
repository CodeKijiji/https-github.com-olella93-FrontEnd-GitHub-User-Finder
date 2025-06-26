import { useEffect, useState } from "react";
import API from "../api";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState("");

  const fetchBookmarks = async () => {
    try {
      const res = await API.get("/items/");
      setBookmarks(res.data);
    } catch (err) {
      setError("Failed to load bookmarks");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const handleDeleteBookmark = async (id) => {
    try {
      await API.delete(`/items/${id}`);
      setBookmarks((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete bookmark");
    }
  };

  return (
    <div className="bookmarks-page">
      <h2>My Bookmarks</h2>
      {error && <p className="error">{error}</p>}
      {bookmarks.length === 0 ? (
        <p>No bookmarks saved yet.</p>
      ) : (
        <ul>
          {bookmarks.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <strong>{item.github_username}</strong> - {item.note}
              <button
                onClick={() => handleDeleteBookmark(item.id)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bookmarks;
