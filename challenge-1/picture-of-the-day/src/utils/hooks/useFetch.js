import { useEffect, useRef, useState } from "react";
import { resolveUrl } from "../utils";

export const useFetch = (url, queryParams = {}) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(resolveUrl(url, queryParams))
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      })
      .catch(() => {
        setState({ data: null, loading: false, error: "Unable to load the information" });
      });
  }, [url, queryParams]);

  return state;
};
