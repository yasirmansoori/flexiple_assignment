const Output = ({ content }) => {
  return (
    <>
      <p>Output:</p>
      <div className="container p-3" style={{ backgroundColor: "#272822" }}>
        <pre className="m-0">
          <code>{`${content}`}</code>
        </pre>
      </div>
    </>
  );
};

export default Output;
