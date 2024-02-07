import Development from "./components/Teams/Development";
import Head from "./components/Teams/Head";
import Sales from "./components/Teams/Sales";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Head />
      <Development />
      <Sales />
    </div>
  );
}

export default App;
