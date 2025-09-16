import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <h1 className="text-3xl text-center font-bold text-gray-800">
          Bienvenido a Time&Trust
        </h1>
      </main>
    </div>
  );
}

export default App;
