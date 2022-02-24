import styled from 'styled-components';

function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem`), '')
    .trim()
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

`;

export const Content = styled.div`
  position: relative;
  
  width: 1000px;
  height: 600px;

  box-shadow: 20px 20px 40px black;
  
  div {
    color: white;
    border: solid 1px red;

    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: ${pixelToRem(103)};
  }
`;

export const Button = styled.button`
  background: none;
  color: white;
  font-weight: 100;

  font-size: ${pixelToRem(23)};
  border-radius: 25px;

  width: ${pixelToRem(190)};
  height: ${pixelToRem(51)};
  border: solid 1px white;

  transition: 0.5s;

  &:hover {
    background: white;
    color: black;
    border: solid 1px black;
  }
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  z-index: -2;
  opacity: 0.8;

  width: 100%;
  height: 100%;
`;

export const ContentImg = styled.img`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

`;