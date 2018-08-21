import React from 'react'
import sys from 'system-components'


export const Lead = sys(
  {
    is: 'h1',
    fontSize: '3.0625em',
    fontFamily: 'inherit',
    fontWeight: 'bold',
    lineHeight: 1.24,
    m: 0
  },
  'color',
  'fontFamily',
  'textAlign'
)


Lead.displayName = 'Lead'


export default Lead
