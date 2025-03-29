import "./App.css";
import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";
import { Button } from "./components/Button";

function App() {
  const onClickFunc = () => {
    console.log("click me!");
  };

  return (
    <>
      <Greeting name="Іван" />
      <Message text="Повідомлення" />
      <Button onClick={onClickFunc} />
    </>
  );
}

export default App;
