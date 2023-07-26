import "./App.css";
import Header from "./components/Header/Header";
import FactsList from "./components/Facts/FactsList";

function App() {
  const facts = [
    {
      number: 1,
      story: "JSX Fun Fact",
      description:
        "If you have a lot of HTML to port to JSX, you can use an online converter.",
    },
    {
      number: 2,
      description:
        "The idea for React came to Jordan Walke when he was trying to create a way to efficiently update the newsfeed without refreshing the entire page.",
      story: "React Fun Fact!",
      isLiked: true,
    },
  ];

  return (
    <div>
      <Header>
        <h2>Have fun with programming!</h2>
      </Header>
      {facts.length && <FactsList facts={facts} />}
      <div style={{"border-top":"1px solid #ccc", padding:"5px"}}>
        <h2>Your favorite facts are</h2>
        <FactsList facts={facts.filter((f) => f.isLiked)} />
      </div>
    </div>
  );
}

export default App;
