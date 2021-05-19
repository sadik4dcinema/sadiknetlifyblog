exports.handler = async event => {
<<<<<<< HEAD
  if (event.queryStringParameters.fbclid) {
=======
  if (event.headers.referer.includes('facebook')) {
>>>>>>> 31d362bc7eac8569d6c4daddc29ff1773df54128
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://www.google.com/'
      }
    }
  } else {
<<<<<<< HEAD
    let pathName = event.path.split('/')[3].split('-')
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: process.env.URL + '/' + pathName[0] + '/' + pathName[1] + '/'
      }
    }
  }
}
=======
    let pathName = location.pathname.split('/')[2].split('-')
    return {
      statusCode: 301,
      headers: {
        location: process.env.URL + pathName[0] + '/' + pathName[1]
      }
    }
  }
}
>>>>>>> 31d362bc7eac8569d6c4daddc29ff1773df54128
