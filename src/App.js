
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <NavBar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr className="mt-4" />
          
            <Todo />
         
          <Footer/>
          <hr className="mt-4" />
        </div>
      </div>

  );
}

export default App;
