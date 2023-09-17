import PageContent from "./components/PageContent";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <SideBar />
      <main>
        <TopBar />
        <PageContent />
      </main>
    </>
  );
}

export default App;