import sys from 'system-components'

import { Box } from './Box'


export const Flex = sys(
  {
    is: Box,
    display: 'flex'
  },

  // flexbox container
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignItems',
  'alignContent'
)


Flex.displayName = 'Flex'


export default Flex
