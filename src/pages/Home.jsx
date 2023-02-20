import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context'
import { Campaigns } from '../components'
import styled from 'styled-components'

const StyledHome = styled.div`
    padding: 100px 10vw;
`

const Home = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <StyledHome>
            <Campaigns
                isLoading={isLoading}
                campaigns={campaigns}
            />
        </StyledHome>
    )
}

export default Home