import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Campaigns } from '../components'
import { useStateContext } from '../context'

const StyledProfile = styled.div`
    padding: 100px 10vw;
`

const Profile = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getUserCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getUserCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <StyledProfile>
            <Campaigns
                isLoading={isLoading}
                campaigns={campaigns}
            />
        </StyledProfile>
    )
}

export default Profile