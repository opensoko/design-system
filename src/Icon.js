import React from 'react'
import PropTypes from 'prop-types'
import sys from 'system-components'

import './icons.svg'


export const getViewBox = (dimension, x=0, y=0) => {
  dimension = dimension.toString().split("x", 2)
  dimension = dimension.length === 2 && !!dimension[1] ? dimension : [dimension[0], dimension[0]]
  return [x, y, ...dimension.map((value) => parseInt(value, 10))]
}


export const SVG = sys(
  {
    is: 'svg'
  },
  'space', 'color', 'width', 'height',
  props => ({
    verticalAlign: props.align ? props.align : "middle"
  })
)


export const Icon = ({name, width, dimension="512x512", height=24, filled=false, ...props}) => {
  return (
    <SVG width={width} height={height} viewBox={getViewBox(dimension).join(" ")} {...props}>
      <use xlinkHref={`#icons_${filled?"filled":"line"}_${name}`} />
    </SVG>
  )
}


Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  dimension: PropTypes.string,
  filled: PropTypes.bool
}

Icon.displayName = 'Icon'


export default Icon
