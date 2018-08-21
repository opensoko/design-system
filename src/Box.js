import sys from 'system-components'
import { style } from 'styled-system'

/*
Box is a primitive element based on a division node (div)
The main purpose is to be a fundamental structural layout element
but also can be a building block for other componets
*/
export const Box = sys(
  {
    boxSizing: 'border-box',
    blacklist: ['boxSizing']
  },
  // core
  'width',
  'space',
  'color',
  'fontSize',
  'fontFamily',

  // flexbox
  'order',
  'flex',
  'alignSelf',
  'flexBasis',
  'justifySelf'
)


Box.displayName = 'Box'


export default Box
