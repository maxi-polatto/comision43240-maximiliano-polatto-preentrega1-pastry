import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/listcontainer/ItemListContainer";

export const App = () => {
  return (
    <div className="App">
      <Navbar />

      <ItemListContainer greeting={"Hola a todos"} />
    </div>
  );
};

export default App;
