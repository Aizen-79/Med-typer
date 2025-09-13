import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
		undefined
	);

	React.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
		};

		// Use media query instead of window.innerWidth to avoid forced reflow
		setIsMobile(mql.matches);
		mql.addEventListener("change", onChange);

		return () => mql.removeEventListener("change", onChange);
	}, []);

	return !!isMobile;
}
