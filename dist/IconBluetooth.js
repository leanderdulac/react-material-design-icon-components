const React = require('react')

const icons = {
  "24": require('./IconBluetooth24.js'),
  "48": require('./IconBluetooth48.js'),
}

module.exports = function IconBluetooth (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

