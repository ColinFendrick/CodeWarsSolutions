const findRoutes = (routes) => {
  const trace = []

  routes
    .map(curr => {
      if (!routes.find(point => point[1] === curr[0])) {
        trace.push(curr[0])
        trace.push(curr[1])
      }
    })
    .map(() => {
      routes.map(curr =>
        curr[0] === trace[trace.length - 1] &&
          trace.push(curr[1])
      )
    })

  return trace.join(', ')
}