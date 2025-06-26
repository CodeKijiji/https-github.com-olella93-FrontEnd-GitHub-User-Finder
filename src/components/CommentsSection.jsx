import { useEffect, useState } from "react";
import API from "../api";

function CommentsSection({ itemId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

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

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      {error && <p className="error">{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} style={{ marginTop: "8px" }}>
              {comment.content}
              <button
                onClick={() => handleDeleteComment(comment.id)}
                style={{
                  marginLeft: "8px",
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "2px 6px",
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

export default CommentsSection;
