import React from 'react'
import sys from 'system-components'


export const Title = sys(
  {
    is: 'h2',
    fontSize: '2.3125em',
    fontWeight: 'bold',
    lineHeight: 1.24,
    m: 0
  },
  'color',
  'fontFamily',
  'textAlign'
)


Title.displayName = 'Title'


export default Title
