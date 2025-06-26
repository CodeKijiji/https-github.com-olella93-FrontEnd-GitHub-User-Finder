import { useEffect, useState } from "react";
import API from "../api";

function CommentsSection({ itemId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  const fetchComments = async () => {
    try {
      const res = await API.get(`/comments/${itemId}`);
      setComments(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load comments");
    }
  };

  useEffect(() => {
    if (itemId) {
      fetchComments();
    }
  }, [itemId]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    try {
      await API.post("/comments/", {
        content: newComment,
        item_id: itemId,
      });
      setNewComment("");
      fetchComments();
    } catch (err) {
      console.error(err);
      setError("Failed to add comment");
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await API.delete(`/comments/${id}`);
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete comment");
    }
  };

  const handleEditClick = (comment) => {
    setEditingId(comment.id);
    setEditedContent(comment.content);
  };

  const handleSaveEdit = async (id) => {
    try {
      await API.put(`/comments/${id}`, { content: editedContent });
      setComments((prev) =>
        prev.map((c) => (c.id === id ? { ...c, content: editedContent } : c))
      );
      setEditingId(null);
      setEditedContent("");
    } catch (err) {
      console.error(err);
      setError("Failed to update comment");
    }
  };

  return (
    <div className="comments-section" style={{ marginTop: "20px" }}>
      <h3>Comments</h3>
      {error && <p className="error">{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={{ padding: "6px", width: "70%", marginRight: "8px" }}
        />
        <button onClick={handleAddComment} style={{ padding: "6px 12px" }}>
          Post
        </button>
      </div>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {comments.map((comment) => (
            <li
              key={comment.id}
              style={{
                marginTop: "8px",
                padding: "6px",
                border: "1px solid #eee",
                borderRadius: "6px",
              }}
            >
              {editingId === comment.id ? (
                <>
                  <input
                    type="text"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    style={{ padding: "4px", width: "60%" }}
                  />
                  <button
                    onClick={() => handleSaveEdit(comment.id)}
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
                  {comment.content}
                  <button
                    onClick={() => handleEditClick(comment)}
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
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    style={{
                      marginLeft: "4px",
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
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CommentsSection;
