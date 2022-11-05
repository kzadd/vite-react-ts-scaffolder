/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// TODO: TS
import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { onGetAccessTokenThunk } from '@/store/slices/auth'
import { useDispatch, useSelector } from '@/hooks/store'

const Home = () => {
  const { accessToken } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onGetToken = () => {
    dispatch(onGetAccessTokenThunk('as546sd1h542dfgj1fgh16asdf651sd'))
  }

  return (
    <Container>
      <Typography variant="h1">Home</Typography>

      <Typography variant="h2">Access Token: {accessToken}</Typography>

      <Button variant="contained" onClick={onGetToken}>
        Get Token
      </Button>
    </Container>
  )
}

export default Home
