export  const searchRestaurants = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/search',
    data: {query}
  })
}