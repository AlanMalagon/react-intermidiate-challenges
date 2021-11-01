import { useMemo } from "react";
import { Title, Picture, Loading } from "..";
import { useFetch } from "../../utils/hooks/useFetch";
import { Background } from "./Content.styles";
import { mockData } from "../../mockData";

export const Content = ({ date }) => {
  const queryParams = useMemo(
    () => ({
      date,
      api_key: process.env.REACT_APP_NASA_APIKEY,
    }),
    [date]
  );

  const { data, loading } = useFetch(`https://api.nasa.gov/planetary/apod`, queryParams);
  // const data = mockData;

  return loading ? (
    <Loading />
  ) : (
    <>
      <Background src={data.url} />
      <Title text={data.title} />
      <Picture src={data.url} />
    </>
  );
};
