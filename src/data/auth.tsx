const url = 'https://bff.goodinside.dev/api/p/cards';

export const apiKey = () => {
  return fetch(url, {
    headers: {
      'x-api-key': 'YOUR_API_KEY'
    }
  });

}

export const bearerToken = () => {
  return fetch(url, {
    headers: {
      Authorization: 'Bearer YOUR_AUTH_TOKEN_HERE'
    }
  });

}

export const basicAuth = () => {
  return fetch(url, {
    headers: {
      Authorization: 'Basic ' + btoa('username:password')
    }
  });

}