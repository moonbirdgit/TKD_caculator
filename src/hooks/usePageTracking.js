// src/hooks/usePageTracking.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // 當路由路徑 (pathname) 或查詢參數 (search) 改變時，發送一個 pageview 事件
    const currentPage = location.pathname + location.search;
    ReactGA.send({
      hitType: "pageview",
      page: currentPage,
      title: document.title,
    });
    console.log(`GA Pageview sent for: ${currentPage}`);
  }, [location]);
};

export default usePageTracking;
