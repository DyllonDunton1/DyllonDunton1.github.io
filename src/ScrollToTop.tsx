import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If you're using a custom scroller div:
    const scroller = document.querySelector(".mainScroller");
    if (scroller) scroller.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Also reset window in case some pages use window scrolling:
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
