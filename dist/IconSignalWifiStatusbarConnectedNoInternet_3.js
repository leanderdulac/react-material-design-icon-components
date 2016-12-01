const React = require('react')

const icons = {
  "26x24": require('./IconSignalWifiStatusbarConnectedNoInternet_326x24.js'),
}

module.exports = function IconSignalWifiStatusbarConnectedNoInternet_3 (props) {
  const size = props.size || 0
  const nearest = Object.keys(icons).reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev)
  const component = icons[nearest]

  return React.createElement("component", null)
}

module.exports.propTypes = {
  size: React.PropTypes.number
}

