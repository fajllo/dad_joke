import JokeList from "./JokeList";
import JokeSidebar from "./JokeSidebar";

function App() {
  return (
    <div className="App flex items-center justify-center h-screen w-screen bg-gradient-to-br from-teal-400  to-sky-500 font-source">
      <JokeSidebar />
      <JokeList />
    </div>
  );
}

export default App;
