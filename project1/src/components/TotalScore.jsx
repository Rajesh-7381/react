// TotalScore.jsx
import styled from "styled-components";

const ScoreContainer = styled.div`
  text-align: center;
`;

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;