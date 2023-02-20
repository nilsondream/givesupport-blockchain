import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar } from './components'
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages'

const StyledApp = styled.div`
`

const App = () => {
    return (
        <StyledApp>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/createcampaign" element={<CreateCampaign />} />
                <Route path="/campaigndetails/:id" element={<CampaignDetails />} />
            </Routes>
        </StyledApp>
    )
}

export default App