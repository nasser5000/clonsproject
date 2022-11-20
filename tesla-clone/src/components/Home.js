import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless delivery"
            backgroundImage="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless delivery"
            backgroundImage="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless delivery"
            backgroundImage="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless delivery"
            backgroundImage="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Lowest Cost Solar Panels in America"
            description="Mony-back Guaranteed"
            backgroundImage="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Solar For New Roofs"
            description="Solar Roof Costes Less then a new "
            backgroundImage="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImage="accessories.jpg"
            leftBtnText="Shop Now"

        />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`