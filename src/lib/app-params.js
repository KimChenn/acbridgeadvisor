const isNode = typeof window === 'undefined';
const windowObj = isNode ? { localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} } } : window;
const storage = windowObj.localStorage;

const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {}) => {
  if (isNode) {
    return defaultValue;
  }

  const storageKey = `app_${paramName}`;
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);

  if (removeFromUrl) {
    urlParams.delete(paramName);
    const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ''}${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  }

  if (searchParam) {
    storage.setItem(storageKey, searchParam);
    return searchParam;
  }

  if (defaultValue) {
    storage.setItem(storageKey, defaultValue);
    return defaultValue;
  }

  return storage.getItem(storageKey) ?? null;
};

const getAppParams = () => {
  return {
    appId: getAppParamValue('app_id', { defaultValue: import.meta.env.VITE_APP_ID || 'local-app' }),
    token: getAppParamValue('access_token', { removeFromUrl: true }),
    fromUrl: getAppParamValue('from_url', { defaultValue: typeof window !== 'undefined' ? window.location.href : '' }),
    functionsVersion: getAppParamValue('functions_version', { defaultValue: import.meta.env.VITE_FUNCTIONS_VERSION || 'v1' }),
    appBaseUrl: getAppParamValue('app_base_url', { defaultValue: import.meta.env.VITE_APP_BASE_URL || '' }),
  };
};

export const appParams = {
  ...getAppParams(),
};
