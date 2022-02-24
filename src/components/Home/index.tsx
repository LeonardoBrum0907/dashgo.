import * as S from "./style";
import Img from '../../assets/setup.png'


export function Home() {
  return (
    <>
    <S.Container>
      <S.Content>
        <S.ContentImg src={Img}/>

        <div>

          <span>
            <h1>Hello world</h1>
            <p>I'm a Front-end web developer</p>
          </span>
          <section>
            <S.Button>Projects</S.Button>
            <S.Button>Social Networks</S.Button>
          </section>
        </div>

      </S.Content>
    </S.Container>
    <S.BackgroundImg src={Img} alt="Setud" />
    </>
  );
}