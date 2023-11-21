// Numberselector.jsx
import styled from "styled-components";

const Numberselector = ({ error, setError, selectednumber, setSelectednumber }) => {
  const arraynumber = [1, 2, 3, 4, 5, 6];

  const numberselecthandler = (value) => {
    setSelectednumber(value);
    setError(""); // Clear the error when a number is selected
  };

  return (
    <NumberselectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arraynumber.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectednumber}
            onClick={() => numberselecthandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select number</p>
    </NumberselectorContainer>
  );
};

export default Numberselector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const NumberselectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 5px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
  }
`;
