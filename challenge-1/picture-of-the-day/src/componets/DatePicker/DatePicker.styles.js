import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 15px 0 15px 0;

  & label {
    font-size: 20px;
  }

  & input {
    border: 1px solid gray;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    margin-left: 10px;
    outline: none;
    padding: 0 10px 0 10px;
  }
`;
