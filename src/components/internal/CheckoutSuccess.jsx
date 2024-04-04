import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { confirmCheckout } from '../../features/products/CartItems'

const CheckoutSuccess = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(confirmCheckout())
  })
  return (
    <>
      <Box className="center mt-80">
        Order Placed
      </Box>
    </>
  )
}

export default CheckoutSuccess
