import Builder from "./pages/Builder";
import Preview from "./pages/Preview";

function App() {
  return (
    <div className="h-screen flex overflow-hidden">

      {/* LEFT SIDE - FORM */}
      <div className="w-1/2 border-r bg-white overflow-y-auto">
        <Builder />
      </div>

      {/* RIGHT SIDE - LIVE PREVIEW */}
      <div className="w-1/2 bg-gray-100 overflow-y-auto">
        <Preview />
      </div>

    </div>
  );
}

export default App;