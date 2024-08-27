import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const ImageLayout = ({children}: Props) => {
  return (
    <div className='bg-red-400'>
    
      <div>{children}</div>
    </div>
  )
}

export default ImageLayout
