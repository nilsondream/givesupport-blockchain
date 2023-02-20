import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CardFund from './CardFund'
import Loader from './Loader'

const StyledCampaign = styled.div`

    .grid-campaigns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }
`

const Campaigns = ({ isLoading, campaigns }) => {

    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaigndetails/${campaign.title}`, { state: campaign })
    }

    return (
        <StyledCampaign>

            {isLoading && <Loader />}
            {!isLoading && campaigns.length === 0 && (<Loader />)}

            <div className='grid-campaigns'>
                {!isLoading && campaigns.length > 0 && campaigns.map((campaign, id) => <CardFund
                    key={id}
                    {...campaign}
                    handleClick={() => handleNavigate(campaign)}
                />)}
            </div>
        </StyledCampaign>
    )
}

export default Campaigns