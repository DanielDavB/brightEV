import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Bright EV Golf Carts`;
  }, [title]);
}
