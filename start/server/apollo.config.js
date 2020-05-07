module.exports = {
  service: {
    endpoint: {
      url: 'https://api.github.com/graphql', // defaults to http://localhost:4000
      headers: {
        // optional
        authorization: 'Bearer lkjfalkfjadkfjeopknavadf'
      },
      skipSSLValidation: true // optional, disables SSL validation check
    }
  }
};