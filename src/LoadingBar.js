import React from "react"

export default function LoadingBar(props) {
  const { color = "black", show } = props
  return (
    <div className="loadingBarContainer">
      <div
        className={`loadingBar ${show ? "loading" : "loaded"}`}
        style={{ backgroundColor: color }}
      />
      <style jsx>{`
        .loadingBarContainer {
          pointer-events: none;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100vw;
          height: 2px;
        }
        .loadingBar {
          opacity: 0;
          width: 100%;
          height: 100%;
          transform: translate(-100%, 0%);
        }
        .loading {
          animation: loading 10s ease-in-out;
          animation-fill-mode: forwards;
        }
        .loaded {
          animation: loaded 1s ease-in-out;
          animation-fill-mode: forwards;
        }

        @keyframes loading {
          from {
            opacity: 1;
            transform: translate(-100%, 0%);
          }
          2% {
            transform: translate(-80%, 0%);
          }
          10% {
            transform: translate(-60%, 0%);
          }
          40% {
            transform: translate(-50%, 0%);
          }
          60% {
            transform: translate(-40%, 0%);
          }
          to {
            opacity: 1;
            transform: translate(-20%, 0%);
          }
        }
        @keyframes loaded {
          from {
            opacity: 1;
            transform: translate(-50%, 0%);
          }
          60% {
            transform: translate(0%, 0%);
            opacity: 1;
          }
          to {
            opacity: 0;
            transform: translate(0%, 0%);
          }
        }
      `}</style>
    </div>
  )
}
