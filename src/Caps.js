import sys from 'system-components'
import Text from './Text'


export const Caps = sys(
  {
    is: Text,
    fontSize: 0
  },
  {
    textTransform: 'uppercase'
  }
)

Caps.displayName = 'Caps'


export default Caps
