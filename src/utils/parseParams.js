export const parseParams = (url) => {
    return JSON.parse('{"' + decodeURI(url)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g,'":"') + '"}');
};