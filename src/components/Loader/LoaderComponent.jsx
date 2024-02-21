import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

function LoaderComponent() {
  useEffect(() => {
    document.getElementById("root").style.overflowY = "hidden";
    document.getElementById("root").style.height = "100vh";

    return () => {
      document.getElementById("root").style.overflow = "auto";
      document.getElementById("root").style.height = "100%";
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          background: "#eee",
          height: "100%",
          width: "100%",
          zIndex: 99999,
          opacity: 0.6,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 99999,
          opacity: 0.6,
        }}
      >
        <ThreeDots
          visible={true}
          height="120"
          width="120"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperclassName="blocks-wrapper"
          colors={["#eee"]}
        />
      </div>
    </>
  );
}

export default LoaderComponent;
