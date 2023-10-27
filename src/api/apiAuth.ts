import md5 from 'md5';

//Interceptor to add the API key query param
function getApiMarvelAuth() {
  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    let [resource] = args;
    const [, config] = args;
    const { hash, publicKey, timestamp } = getApiMarvelQueryParams();

    // request interceptor
    resource = `${resource}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

    const response = await originalFetch(resource, config);

    return response;
  };
}

function getApiMarvelQueryParams() {
  const { VITE_MARVEL_PUBLIC_KEY, VITE_MARVEL_PRIVATE_KEY } = import.meta.env;

  //Get timeStamp
  const timestamp = new Date().getTime();

  //Get Hash
  const hash = md5(
    timestamp + VITE_MARVEL_PRIVATE_KEY + VITE_MARVEL_PUBLIC_KEY
  );

  return {
    timestamp,
    hash,
    publicKey: VITE_MARVEL_PUBLIC_KEY
  };
}

export { getApiMarvelAuth, getApiMarvelQueryParams };
