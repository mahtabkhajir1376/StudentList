import "./App.css";
import Root from "./router/Router";
function App() {
  return (
    <div className="flex flex-row justify-center items-center py-20 ">
      <div className=" w-[35%] h-[650px] bg-[url(public/graguation.jpg)] bg-no-repeat bg-cover bg-center  shadow-2xl rounded-tl-lg rounded-bl-lg "></div>
      <Root />
    </div>
  );
}

export default App;
