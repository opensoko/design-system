import sys from 'system-components'

import Text from './Text'


export const Normal = sys(
  {
    is: Text,
    fontSize: '1em',
    lineHeight: 1.4
  }
)


Normal.displayName = 'Normal'


export default Normal
