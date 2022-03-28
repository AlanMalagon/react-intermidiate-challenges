import { useState } from "react";
import { DatePicker, Content } from "./componets";
import { getTodayDate } from "./utils/utils";
import { Container, SubtitleText } from "./App.styles";

function App() {
  const [date, setDate] = useState(getTodayDate());

  const handleOnChange = ({ target: { value } }) => {
    setDate(value);
  };

  return (
    <Container>
      <SubtitleText>NASA: Picture of the day</SubtitleText>
      <DatePicker date={date} onChange={handleOnChange} />
      <Content date={date} />
    </Container>
  );
}

export default App;
