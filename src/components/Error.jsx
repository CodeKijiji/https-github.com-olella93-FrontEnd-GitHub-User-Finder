function Error({ message }) {
    return (
      <div className="error-box" style={{ color: "red", marginTop: "1rem" }}>
        <strong>⚠ Error:</strong> {message}
      </div>
    );
  }
  
  export default Error;
  
