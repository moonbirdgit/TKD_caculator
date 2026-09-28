import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../../hooks/useMediaQuery";
import usePageTracking from "../../../hooks/usePageTracking";
import { DASHBOARD_QUERY, ROUTES } from "../../../constants/layout";
import Header from "../Header/Header";
import TabBar from "../TabBar/TabBar";
import PagedView from "../PagedView/PagedView";
import Dashboard from "../Dashboard/Dashboard";
import InfoDialog from "../../InfoDialog/InfoDialog";
import styles from "./AppShell.module.scss";

// 小螢幕：單頁 + 底部分頁列 + 左右滑動
// 大螢幕：三個區塊並排的儀表板
export default function AppShell() {
  const isDashboard = useMediaQuery(DASHBOARD_QUERY);
  const location = useLocation();
  const [infoOpen, setInfoOpen] = useState(false);
  usePageTracking();

  const current =
    ROUTES.find((route) => route.path === location.pathname) ?? ROUTES[0];

  return (
    <div
      className={styles.shell}
      data-layout={isDashboard ? "dashboard" : "paged"}
    >
      <Header
        title={isDashboard ? null : current.title}
        onInfoClick={() => setInfoOpen(true)}
      />
      <main className={styles.main}>
        {isDashboard ? <Dashboard /> : <PagedView />}
      </main>
      {!isDashboard && <TabBar />}
      <InfoDialog open={infoOpen} onClose={() => setInfoOpen(false)} />
    </div>
  );
}
