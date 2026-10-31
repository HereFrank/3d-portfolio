import { useEffect, useRef, useState } from "react";

// Mounts its children only while the wrapper is near the viewport, so heavy
// WebGL canvases are neither created nor rendered when nobody can see them.
const InView = ({ children, className, rootMargin = "200px" }) => {
  const ref = useRef(null);
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
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : null}
    </div>
  );
};

export default InView;
