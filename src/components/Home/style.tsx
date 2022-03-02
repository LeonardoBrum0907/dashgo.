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

  box-shadow: 30px 30px 30px black;


  //desktopLG
  @media(min-width: 1600px) {
    width: 2000px;
    height: 1200px;
  }
  
  div {
    color: white;

    position: absolute;
    right: 0;
    width: 60%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: ${pixelToRem(80)};

    //mobile
    @media(max-width: 850px) {
      width: 100%;

      gap: ${pixelToRem(50)}
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      h1 {
        font-size: ${pixelToRem(90)};

        text-shadow: 0px 0px 10px #000000;
        
        //desktopLG
        @media(min-width: 1600px) {
          font-size: ${pixelToRem(190)};
          text-shadow: 0px 0px 100px black;
        }

        //mobile
        @media(max-width: 850px) {
          font-size: ${pixelToRem(60)};
        }
      }

      p {
        font-size: ${pixelToRem(25)};

        text-shadow: 0px 0px 20px black;

        //desktopLG
        @media(min-width: 1600px) {
          font-size: ${pixelToRem(50)};
        }

        //mobile
        @media(max-width: 850px) {
          font-size: ${pixelToRem(15)};
        }

      }
    }

    section {
      width: 65%;
      display: flex;
      justify-content: space-between;
      
      @media(max-width: 850px) {
        width: 50%;

        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
    }

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

  transition: 0.3s;

  &:hover {
    background: white;
    color: black;
  }

  @media(min-width: 1600px) {
    width: ${pixelToRem(480)};
    height: ${pixelToRem(123)};

    border-radius: 75px;

    font-size: ${pixelToRem(40)};
  }

  @media(max-width: 720px) {
    /* width: ${pixelToRem(160)};
    height: ${pixelToRem(41)};

    font-size: ${pixelToRem(18)}; */
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