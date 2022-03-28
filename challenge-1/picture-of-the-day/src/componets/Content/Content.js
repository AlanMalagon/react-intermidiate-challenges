import { useMemo } from "react";
import { Title, Picture, Loading } from "..";
import { useFetch } from "../../utils/hooks/useFetch";
import { Background } from "./Content.styles";

export const Content = ({ date }) => {
  const queryParams = useMemo(
    () => ({
      date,
      api_key: process.env.REACT_APP_NASA_APIKEY,
    }),
    [date]
  );

  const { data, loading } = useFetch(`https://api.nasa.gov/planetary/apod`, queryParams);
  const { title, url } = data ? data : { title: "", url: "" };

  return loading ? (
    <Loading />
  ) : (
    <>
      <Background src={url} />
      <Title text={title} />
      <Picture src={url} />
    </>
  );
};
