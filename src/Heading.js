import React from 'react'
import sys from 'system-components'


export const Heading = sys(
  {
    is: 'h3',
    fontSize: '1.75em',
    fontWeight: 'bold',
    lineHeight: 1.24,
    m: 0
  },
  'color',
  'fontFamily',
  'textAlign'
)


Heading.displayName = 'Heading'


export default Heading
