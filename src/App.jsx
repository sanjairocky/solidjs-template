import Footer from "./components/Footer";
import Header from "./components/header";

const App = () => {
  return (
    <div class="flex flex-col w-screen h-screen">
      <Header />
      <main class="flex flex-col flex-1 overflow-scroll p-4">
        hellow from solidjs
      </main>
      <Footer />
    </div>
  );
};

export default App;
