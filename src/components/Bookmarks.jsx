import { useEffect, useState } from "react";
import API from "../api";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedNote, setEditedNote] = useState("");

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

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditedNote(item.note);
  };

  const handleSaveEdit = async (id) => {
    try {
      await API.put(`/items/${id}`, { note: editedNote });
      setBookmarks((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, note: editedNote } : item
        )
      );
      setEditingId(null);
      setEditedNote("");
    } catch (err) {
      console.error(err);
      setError("Failed to update bookmark");
    }
  };

  const filteredBookmarks = bookmarks.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.github_username.toLowerCase().includes(term) ||
      item.note.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="bookmarks-page" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>My Bookmarks</h2>
      <input
        type="text"
        placeholder="Search bookmarks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      {error && <p className="error">{error}</p>}
      {filteredBookmarks.length === 0 ? (
        <p>No bookmarks found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredBookmarks.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: "12px",
                padding: "8px",
                border: "1px solid #eee",
                borderRadius: "6px",
              }}
            >
              <strong>{item.github_username}</strong> -{" "}
              {editingId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editedNote}
                    onChange={(e) => setEditedNote(e.target.value)}
                    style={{ padding: "4px", width: "60%" }}
                  />
                  <button
                    onClick={() => handleSaveEdit(item.id)}
                    style={{
                      marginLeft: "8px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "4px 8px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    style={{
                      marginLeft: "4px",
                      backgroundColor: "#ccc",
                      color: "black",
                      border: "none",
                      borderRadius: "4px",
                      padding: "4px 8px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {item.note}
                  <button
                    onClick={() => handleEditClick(item)}
                    style={{
                      marginLeft: "8px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "4px 8px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
              <button
                onClick={() => handleDeleteBookmark(item.id)}
                style={{
                  marginLeft: "8px",
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
