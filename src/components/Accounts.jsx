import React from 'react';
import styled from "styled-components";
import Dashboard from './Dashboard/Dashboard'
import UserSideBar from './Dashboard/UserSideBar'


const Accounts = () => {
  return (
    <Div className='bg-white'>
      <UserSideBar/>
      <Dashboard/>
    </Div>
  )
}

export default Accounts

const Div = styled.div`
  position: relative;
`;