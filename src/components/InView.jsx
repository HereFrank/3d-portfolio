import { useEffect, useRef, useState } from "react";

// True while the referenced element is near the viewport.
export const useInView = (ref, rootMargin = "200px") => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return visible;
};

// Mounts its children only while the wrapper is near the viewport, so heavy
// WebGL canvases are neither created nor rendered when nobody can see them.
const InView = ({ children, className, rootMargin }) => {
  const ref = useRef(null);
  const visible = useInView(ref, rootMargin);

  return (
    <div ref={ref} className={className}>
      {visible ? children : null}
    </div>
  );
};

export default InView;
