import "./Content.css";
function Content() {
  const title = "JSX Fun Fact";
  const text =
    "If you have a lot of HTML to port to JSX, you can use an online converter.";
  return (
    <>
      <h3 className="fact-title">{title}</h3>
      <p className="fact">{text}</p>
      <div>
        <h1 style={{ backgroundColor: "black", color: "pink" }}>
          My Awesome App
        </h1>
        <p>My awesome app is a React app.</p>
      </div>
    </>
  );
}

export default Content;
