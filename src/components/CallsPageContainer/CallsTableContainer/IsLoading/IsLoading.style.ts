import styled from "styled-components";

export const IsLoadingContainer = styled.div`
    width: 92px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 150px;
    left: 120px;


`

export const LoaderImg = styled.img`
    width: 12px;
    height: 12px;

    animation: rotation 2s infinite linear;

    @keyframes rotation {
        from {
          transform: rotate(0deg); /* Начальное положение - 0 градусов */
        }
        to {
          transform: rotate(360deg); /* Конечное положение - 360 градусов */
        }
      }

`

export const LoaderText = styled.p`
color: #899CB1;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
width: 70px;
height: 20px;
`