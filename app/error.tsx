'use client'
import React from 'react'

interface Props {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log(error)
  return (
    <>
      <div> we goofed up</div>
      <button className='btn' onClick={() => reset()}>
        retry
      </button>
    </>
  )
}

export default ErrorPage
