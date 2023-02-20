import React from 'react'
import styled from 'styled-components'
import { User } from 'phosphor-react'
import { daysLeft } from '../utils'

const StyledCardFund = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-md);
    overflow: hidden;
    border: 1px solid var(--white-3);

    .card-fund-image {
        height: 225px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }
    }

    .card-fund-data {
        padding: 25px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        span {
            font-size: small;
            font-weight: 500;
            opacity: 0.6;
        }

        p {
            font-size: small;
        }

        .description {
            text-align: left;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .target-deadline {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 100%;

            div {
                padding: 10px 20px;
                background: var(--white-2);
                border-radius: var(--border-sm);

                p {
                    margin-bottom: 10px;
                }
            }
        }

        .owner {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;

            div {
                padding: 7px;
                border-radius: 35%;
                background: var(--white-2);
                display: flex;
            }

            p {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                opacity: 0.65;
            }
        }
    }

    :hover .card-fund-image img{
        transform: scale(1.1);
        transition: var(--transition);
    }
`

const CardFund = ({ owner, title, category, description, target, deadline, amountCollected, image, handleClick }) => {

    const remainingDays = daysLeft(deadline);

    return (
        <StyledCardFund onClick={handleClick}>
            <div className='card-fund-image'>
                <img src={image} alt="fund" />
            </div>

            <div className='card-fund-data'>
                <span>{category}</span>
                <h2>{title}</h2>
                <p className='description'>{description}</p>

                <div className='target-deadline'>
                    <div>
                        <p>Meta {target} ETH</p>
                        <h2>{amountCollected}</h2>
                    </div>
                    <div>
                        <p>Días restantes</p>
                        <h2>{remainingDays}</h2>
                    </div>
                </div>

                <div className='owner'>
                    <div><User size={17} /></div>
                    <p>{owner}</p>
                </div>
            </div>
        </StyledCardFund>
    )
}

export default CardFund