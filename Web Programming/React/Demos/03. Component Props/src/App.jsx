import './App.css'
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  const title = 'JSX Fun Fact';
  const text = 'If you have a lot of HTML to port to JSX, you can use an online converter.';
  
  const story = 'React Fun Fact!';
  const description = 'The idea for React came to Jordan Walke when he was trying to create a way to efficiently update the newsfeed without refreshing the entire page.';

  const contentProps = {
    number: 2,
    description,
    story,
  };

  return (
    <div>
      <Header>
        <h2>Have fun with programming!</h2>
      </Header>

      <Content number={1} description={text} story={title} />
      <Content {...contentProps} />
    </div>
  );
}

export default App
