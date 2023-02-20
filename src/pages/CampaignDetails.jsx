import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStateContext } from '../context'
import { CountBox, Loader } from '../components'
import { calculateBarPercentage, daysLeft } from '../utils'
import styled from 'styled-components'

const StyledCampaignDetails = styled.div`
    padding: 100px 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .campaign-details-wrapper {
        width: 800px;

        .details-image {
            position: relative;
            border-radius: var(--border-lg);
            overflow: hidden;
            height: 250px;

            img {
                position: absolute;
                z-index: 1;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .shadow {
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
            }

            .specs-container {
                position: absolute;
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 30px 40px;
                bottom: 0;
                left: 0;
                z-index: 3;

                h1 {
                    color: var(--white-0);
                }

                p {
                    opacity: 0.65;
                    color: var(--white-0);
                }
            }
        }

        .details-grid {
            margin-top: 50px;
            display: grid;
            grid-template-columns: 3fr 1fr;
            align-items: start;
            gap: 50px;

            .details-grid-left {
                display: flex;
                flex-direction: column;
                gap: 40px;

                .details-collected {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;

                    .collected-top, .collected-bottom {
                        display: flex;
                        justify-content: space-between;
                    }

                    .collected-center {
                        height: 6px;
                        width: 100%;
                        background: rgba(0, 0 , 0, 0.075);
                        border-radius: var(--border-md);
                        overflow: hidden;
                        position: relative;

                        .progress-bar {
                            background: var(--black-3);
                            height: 100%;
                            position: absolute;
                            display: block;
                        }
                    }
                }

                .details-story {

                    p {
                        font-size: small;
                        opacity: 0.65;
                        line-height: 23px;
                        margin-top: 15px;
                    }
                }

                .details-donors {

                    p {
                        font-size: small;
                        opacity: 0.65;
                        line-height: 23px;
                    }

                    .donors {
                        margin-top: 20px;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;

                        .donors-list {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 50px;
                            padding: 10px 15px;
                            //background: var(--white-2);
                            border: 1px solid var(--white-3);
                            border-radius: var(--border-sm);

                            span {
                                display: flex;
                                gap: 20px;

                                h6 {
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }
            }

            .details-grid-right {
                display: flex;
                flex-direction: column;
                gap: 15px;

                input {
                    padding: 20px;
                    border-radius: var(--border-md);
                    border: 1px solid var(--white-3);
                }

                .believe {
                    padding: 20px;
                    background: var(--green);
                    border-radius: var(--border-md);
                    text-align: center;
                }

                button {
                    width: 100%;
                    padding: 20px;
                    background: var(--black-0);
                    color: var(--white-0);
                    border-radius: var(--border-md);
                    font-weight: 700;
                }
            }
        }
    }
`

const CampaignDetails = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const { donate, getDonations, contract, address, connect } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [donators, setDonators] = useState([]);

    const remainingDays = daysLeft(state.deadline);

    const fetchDonators = async () => {
        const data = await getDonations(state.pId);

        setDonators(data);
    }

    useEffect(() => {
        if (contract) fetchDonators();
    }, [contract, address])

    const handleDonate = async () => {
        setIsLoading(true);

        await donate(state.pId, amount);

        navigate('/')
        setIsLoading(false);
    }

    return (
        <StyledCampaignDetails>

            {isLoading && <Loader />}

            <div className='campaign-details-wrapper'>
                <div className='details-image'>
                    <img src={state.image} alt="campaign" />
                    <div className='shadow' />
                    <div className='specs-container'>
                        <h1>{state.title}</h1>
                        <p>{state.category}</p>
                    </div>
                </div>

                <div className='details-grid'>
                    <div className='details-grid-left'>
                        <div className='details-collected'>
                            <div className='collected-top'>
                                <CountBox title="Recaudado" value={`ETH ${state.amountCollected}`} />
                                <CountBox title="Meta" value={`ETH ${state.target}`} />
                            </div>

                            <div className='collected-center'>
                                <div className='progress-bar' style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%' }} />
                            </div>

                            <div className='collected-bottom'>
                                <CountBox title="Patrocinadores" value={donators.length} />
                                <CountBox title="Días restantes" value={remainingDays} />
                            </div>
                        </div>

                        <div className='details-story'>
                            <h3>Descripción de la campaña</h3>
                            <p>{state.description}</p>
                        </div>

                        <div className='details-donors'>
                            <h3>Donadores</h3>
                            <div className='donors'>
                                {
                                    donators.length > 0 ? donators.map((item, index) => (
                                        <div className='donors-list' key={`${item.donator}-${index}`}>
                                            <span>
                                                <h6>{index + 1}</h6>
                                                <h6>{item.donator}</h6>
                                            </span>
                                            <h5>ETH {item.donation}</h5>
                                        </div>
                                    )) : (
                                        <p>Aún no hay donantes. ¡Se el primero!</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className='details-grid-right'>

                        <input
                            type="number"
                            placeholder="ETH 0.1"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />

                        <div className='believe'>
                            <h5>Apoya el proyecto porque crees en él.</h5>
                        </div>

                        <button
                            type='button'
                            onClick={() => {
                                if (address){
                                    handleDonate()
                                }
                                else connect()
                            }}
                        >
                            {address ? 'Donar' : 'Conectar billetera'}</button>
                    </div>
                </div>
            </div>
        </StyledCampaignDetails>
    )
}

export default CampaignDetails