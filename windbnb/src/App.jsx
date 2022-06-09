import { DrawerProvider } from "./context/DrawerContext";
import Navbar from "./components/Navbar";
import StayList from "./components/StayList";
function App() {
  return (
    <main className="md:container mx-auto">
      <Navbar />
    </main>
  );
}

export default App;