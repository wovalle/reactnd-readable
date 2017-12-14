// From: https://gist.github.com/spicydonuts/941553b8c2562ae17e2c

const setupRequestOptions = (options, overrideMethod) => {
  if (overrideMethod) options.method = overrideMethod;
  if (!options.headers) options.headers = {};
  options.credentials = 'same-origin';
  return options;
};

const setupJsonRequestOptions = (options, overrideMethod) => {
  options = setupRequestOptions(options, overrideMethod);
  options.headers['Accept'] = 'application/json';
  if (options.body) {
    options.headers['Content-Type'] = 'application/json';
    if (typeof options.body !== 'string' || !/^".*"$/g.test(options.body)) {
      options.body = JSON.stringify(options.body);
    }
  }
  return options;
};

const getOkAndJsonBody = res =>
  res.json()
    .catch(() => null)
    .then(data => ({ ok: res.ok, body: data }));

const checkOk = res => res.ok ? res : Promise.reject(res);
const unwrapBody = res => res.body;

export const fetchJsonWithResponse = (url, options, overrideMethod) => {
  options = setupJsonRequestOptions(options, overrideMethod);
  return fetch(url, options);
};

export const fetchJson = (url, options, overrideMethod) => {
  return fetchJsonWithResponse(url, options, overrideMethod)
    .then(getOkAndJsonBody)
    .then(checkOk)
    .then(unwrapBody);
};

export const fetchRaw = (url, options, overrideMethod) => {
  options = setupRequestOptions(options, overrideMethod);
  return fetch(url, options);
};

export const getJson = (url, options) => fetchJson(url, options, 'GET');
export const postJson = (url, options) => fetchJson(url, options, 'POST');
export const putJson = (url, options) => fetchJson(url, options, 'PUT');
export const deleteJson = (url, options) => fetchJson(url, options, 'DELETE');

export const getRaw = (url, options) => fetchRaw(url, options, 'GET');
export const postRaw = (url, options) => fetchRaw(url, options, 'POST');
export const putRaw = (url, options) => fetchRaw(url, options, 'PUT');
export const deleteRaw = (url, options) => fetchRaw(url, options, 'DELETE');
