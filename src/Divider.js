import sys from 'system-components'


export const Divider = sys({
  is: 'hr',
  mx: 0,
  my: 3,
  border: 0,
  borderBottom: 1,
  borderColor: 'gainsboro'
}, 'space', 'color')

Divider.displayName = 'Divider'


export default Divider
