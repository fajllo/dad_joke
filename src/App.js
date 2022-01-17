import JokeList from "./JokeList";
import JokeSidebar from "./JokeSidebar";

function App() {
  return (
    <div className="App  text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black flex items-center justify-center h-screen w-screen font-source font-thin flex-col lg:flex-row">
      <JokeList />
    </div>
  );
}

export default App;
