import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-fb1XWfch.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, as: Tag = "div", delay = 0, variant = "up", className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
			setShown(true);
			return;
		}
		if (node.getBoundingClientRect().top < window.innerHeight * .9) {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .08,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: delay ? `${delay}ms` : void 0 },
		className: `reveal reveal-${variant} ${shown ? "reveal-in" : ""} ${className}`,
		"data-tsd-source": "/src/components/Reveal.tsx:56:5",
		children
	});
}
//#endregion
export { Reveal as t };
