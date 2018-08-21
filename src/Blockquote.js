import React from 'react'
import sys from 'system-components'

import Border from './Border'
import Large from './Large'
import Normal from './Normal'


export const BlockquoteBox = sys(
  {
    is: Border,
    borderLeft: 1,
    borderColor: 'gray'
  }
)


export const Blockquote = ({cite, children, ...rest}) => {
  return (
    <BlockquoteBox pl={16} my={32} {...rest}>
      <Large py={8}>{children}</Large>
      <Normal py={8} color="darkgray">{cite}</Normal>
    </BlockquoteBox>
  )
}


Blockquote.displayName = 'Blockquote'


export default Blockquote
