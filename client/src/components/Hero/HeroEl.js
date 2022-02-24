import styled from 'styled-components';

export const HeroContainer = styled.div`
background= #000000;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #fff;
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center

@media screen and (max-width: 760px) {
    font-size: 49px;
}
`

export const HeroText = styled.h1`
color: #000000;
font-size: 48px;
text-align: center;
color: #fff;

@media screen and (max-width: 760px) {
    font-size: 40px;
}

@media screen and (max-width: 660px) {
    font-size: 15px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`