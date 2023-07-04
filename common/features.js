const features = {}

features.getPathCount = paths => {
  return paths.lenght
}

features.getPointCount = paths => {
  const points = (paths = paths.flat())
  return points.length
}

if (typeof module !== 'undefined') {
  module.exports = features
}
