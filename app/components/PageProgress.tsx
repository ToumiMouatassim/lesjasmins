import { useEffect, useRef, FC } from "react";

const PageProgress: FC = () => {
  const progressWrapRef = useRef<HTMLDivElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const progressWrap = progressWrapRef.current;
    const progressPath = progressPathRef.current;

    if (!progressWrap || !progressPath) return;

    const offset = 50;
    const pathLength = progressPath.getTotalLength();
 
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();
    progressPath.getBoundingClientRect();  
    progressPath.style.transition = "stroke-dashoffset 10ms linear";
 
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = pathLength - (scrollTop * pathLength) / height;
      progressPath.style.strokeDashoffset = progress.toString();

      if (scrollTop >= offset) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    };
 
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    progressWrap.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      progressWrap.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="progress-wrap" ref={progressWrapRef}>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          ref={progressPathRef}
        />
      </svg>
    </div>
  );
};

export default PageProgress;
