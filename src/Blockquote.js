import React from 'react'
import sys from 'system-components'

import Border from './Border'
import Large from './Large'
import Normal from './Normal'


export const Blockquote = sys(
  {
    is: Border,
    pl: 4,
    my: 4,
    borderLeft: 1,
    borderColor: 'gainsboro'
  }
)

Blockquote.displayName = 'Blockquote'


export default Blockquote
