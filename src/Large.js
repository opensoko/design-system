import sys from 'system-components'

import Text from './Text'


export const Large = sys(
  {
    is: Text,
    fontSize: '1.3125em',
    lineHeight: 1.4
  }
)


Large.displayName = 'Large'


export default Large
