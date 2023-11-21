

// RollDice.jsx (unchanged)
import styled from "styled-components";

const RollDice = ({ currentdice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/download_${currentdice}.png`} alt={`Dice ${currentdice}`} />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;

export default RollDice;