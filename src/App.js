import LeftAside from "./LeftAside";
import RightContent from "./RightContent";

function App() {
  return (
    <div className="w-100 d-flex justify-content-between">
      <LeftAside />
      <RightContent />
    </div>
  );
}

export default App;
