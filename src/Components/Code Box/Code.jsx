import Copy from "../Copy button/Copy";

const Code = ({ code }) => {
  return (
    <div
      className="container p-4 d-flex gap-3 justify-content-between my-2"
      style={{ backgroundColor: "#02032a" }}
    >
      <div>
        <pre className="m-0">
          <code>{code}</code>
        </pre>
      </div>
      <Copy textToCopy={code} />
    </div>
  );
};

export default Code;
