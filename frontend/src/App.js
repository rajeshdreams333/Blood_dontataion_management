import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import './App.css'
function App() {
  return (
    <div className="flex flex-col h-max-screen h-min-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
