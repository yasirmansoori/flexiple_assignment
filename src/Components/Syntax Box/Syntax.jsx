const Syntax = ({ content }) => {
  return (
    <>
      <p>Syntax:</p>
      <div className="container p-3" style={{ backgroundColor: "#2A2A2C" }}>
        <pre className="m-0">
          <code>{`${content}`}</code>
        </pre>
      </div>
    </>
  );
};

export default Syntax;
