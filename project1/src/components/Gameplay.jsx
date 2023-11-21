// Gameplay.jsx
import styled from "styled-components";
import Numberselector from "./Numberselector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
// import RuleContainer from "./RuleContainer";

const Gameplay = () => {
  const [selectednumber, setSelectednumber] = useState();
  const [currentdice, setCurrentdice] = useState(1);
  const [error, setError] = useState("");
  const [score, setScore] = useState(0); // Make sure you have this state declared
  // const [showrules,setShowrules]=useState(false);

  // Function to generate a random number between min and max (inclusive)
  const generateRandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Function to handle dice roll
  const roleDice = () => {
    if (!selectednumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    // Generate a random number between 1 and 6 (inclusive)
    const randomnumber = generateRandomnumber(1, 6);

    // Update the state with the new random number
    setCurrentdice(randomnumber);

    // Check if selectednumber matches the randomnumber
    if (selectednumber === randomnumber) {
      setScore((prev) => prev * randomnumber);
    } else {
      setScore((prev) => prev - 2);
    }

    // Clear the selected number
    setSelectednumber(undefined);
  };
  const resetscore = () =>{
    setScore(0)
  }
  

  return (
    <MainContainer>
  <div className="top-section">
    <TotalScore score={score} />
    <Numberselector error={error} setError={setError} selectednumber={selectednumber} setSelectednumber={setSelectednumber} />
  </div>
  <RollDice currentdice={currentdice} roleDice={roleDice} />
  <div className="btns">
    <button onClick={resetscore}>Reset</button>
    
  </div>
</MainContainer>

  );
};

const MainContainer = styled.div`
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-top: 70px;
  }
  .btns{
    margin-top:40px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    justify-content:center;
    
  }
  button{
    background-color:black;
    color:white
  }
`;

export default Gameplay;
