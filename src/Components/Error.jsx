function Error({ message }) {
    console.log("Rendering Error component with message:", message);
    return (
      <div className="error-box" style={{ color: "red", marginTop: "1rem" }}>
        <strong>⚠ Error:</strong> {message}
      </div>
    );
  }
  
  export default Error;
  