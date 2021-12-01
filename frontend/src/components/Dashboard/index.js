import React from 'react'
import styled from 'styled-components'
import GarbageMap from './GarbageMap';

const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: grid;
  grid-template-areas: "map stats";
  grid-template-rows: auto;
  grid-template-columns: auto 600px;
  grid-gap: 1em;
`;

const Stats = styled.div`
  width: 100%;
  height: 100%;
`;

const Dashboard = () => {
  return (
    <Container>
      <GarbageMap />
      <Stats>Stats</Stats>
    </Container>
  )
}

export default Dashboard;
