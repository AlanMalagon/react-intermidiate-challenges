import { formatISO } from "date-fns";

export const getTodayDate = () => {
  const date = formatISO(new Date(), { representation: "date" });
  return date;
};

export const resolveUrl = (url, queryParams) => {
  const params = Object.keys(queryParams);
  const urlWithParams = params.reduce((url, param, i) => {
    let newQueryParam = ``;
    if (i === 0) newQueryParam = `?${param}=${encodeURI(queryParams[param])}`;
    if (i > 0) newQueryParam = `&${param}=${encodeURI(queryParams[param])}`;
    return `${url}${newQueryParam}`;
  }, url);
  return urlWithParams;
};
