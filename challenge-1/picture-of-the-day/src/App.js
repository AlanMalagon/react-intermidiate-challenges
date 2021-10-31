import { useState } from "react";
import { DatePicker, Picture, Title } from "./componets";
import { formatDate } from "./utils/utils";
import { Background, Container } from "./App.styles";

function App() {
  const text = "Dark Matter in a Simulated Universe";
  const src = "https://images5.alphacoders.com/100/1000730.png";
  const [date, setDate] = useState(formatDate(new Date()));

  const handleOnChange = ({ target: { value } }) => {
    setDate(value);
  };

  return (
    <Container>
      <Background src={src} />
      <Title text={text} />
      <DatePicker date={date} onChange={handleOnChange} />
      <Picture src={src} />
    </Container>
  );
}

export default App;
