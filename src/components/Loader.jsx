import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(4px);

    .loader-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;

        p {
            font-weight: 700;
            font-size: small;
            color: var(--black-2);
            text-align: center;
            //letter-spacing: 3px;
            //text-transform: uppercase;

            span {
                opacity: 0.5;
            }
        }

        .cube-loader {
            width: 45px;
            height: 45px;
            animation: spinner 3s infinite ease;
            transform-style: preserve-3d;

            div {
                height: 100%;
                position: absolute;
                width: 100%;
                //background: var(--transparent-1);
                border: 2.25px solid var(--black-0);

                :nth-of-type(1) {
                    transform: translateZ(-22.4px) rotateY(180deg);
                }

                :nth-of-type(2) {
                    transform: rotateY(-270deg) translateX(50%);
                    transform-origin: top right;
                }

                :nth-of-type(3) {
                    transform: rotateY(270deg) translateX(-50%);
                    transform-origin: center left;
                }

                :nth-of-type(4) {
                    transform: rotateX(90deg) translateY(-50%);
                    transform-origin: top center;
                }

                :nth-of-type(5) {
                    transform: rotateX(-90deg) translateY(50%);
                    transform-origin: bottom center;
                }

                :nth-of-type(6) {
                    transform: translateZ(22.4px);
                }
            }
            
            @keyframes spinner {
                0% {
                    transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
                }

                50% {
                    transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
                }

                100% {
                    transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
                }
            }
        }
    }
`

const Loader = () => {
    return (
        <StyledLoader>
            <div className='loader-container'>
                <div className='cube-loader'>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <p>Cargando...<br/><span>Por favor espere</span></p>
            </div>
        </StyledLoader>
    )
}

export default Loader