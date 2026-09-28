import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// 路由 (pathname / search) 改變時送出 GA pageview
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (!ReactGA.isInitialized) return;
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);
};

export default usePageTracking;
