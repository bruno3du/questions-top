/** @format */

import styled from "styled-components";

export const ResultadoStyled = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  h2 {
    text-align: center;
    margin: 15px 0;
    font-size: 2.2rem;
    width: 100%;
    max-width: 1000px;
  }

  > div {
    width: 90%;
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 10px;
      }
    }
  }

  button {
    background-color: var(--yellow);
    border: none;
    border-radius: 10px;
    padding: 10px 69px;
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const QuestionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 700px;
`;
