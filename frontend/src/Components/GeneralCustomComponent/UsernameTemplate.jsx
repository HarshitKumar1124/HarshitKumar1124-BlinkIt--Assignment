import React from 'react'
import { CardHeader,Avatar } from '@mui/material'

const UsernameTemplate = ({userData}) => {
  return (
    <CardHeader 
    avatar={
      <Avatar sx={{ bgcolor: 'tomato' }}>
       {userData.name[0]}
      </Avatar>
    }
    title={userData.name}
    
   
  />
  )
}

export default UsernameTemplate