"use client";

import { LoadScriptProps } from "@/types";
import { useEffect, useState } from "react";

const useLoadScript = (props: LoadScriptProps) => {
  const {
    async = false,
    defer = false,
    scriptSrc,
    type = "text/javascript",
  } = props;

  const [scriptIsLoaded, setScriptIsLoaded] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");

  useEffect(() => {
    const scriptTag = document.createElement("script");

    scriptTag.src = scriptSrc;
    scriptTag.async = async;
    scriptTag.defer = defer;
    scriptTag.type = type;

    scriptTag.onload = () => {
      setScriptIsLoaded(true);
    };

    scriptTag.onerror = (e) => {
      setScriptIsLoaded(false);
      setErrorDetails(e.toString());
    };

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return { scriptIsLoaded, errorDetails };
};

export default useLoadScript;
