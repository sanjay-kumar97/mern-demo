import React from "react";

const ProgressSpinner = ({ showLoader }) => {
  const styles = {
    loader: `border-2 relative inline-block align-top rounded-[50%] w-10 h-10 ${
      showLoader
        ? "border-black/5 border-l-green-500 animate-spin"
        : "border-green-500 transition-all duration-500 ease-out"
    }`,
    checkmark: `${
      showLoader
        ? "hidden"
        : "after:content-[''] after:opacity-100 after:h-6 after:w-3 after:origin-top-left after:border-[3px] after:border-transparent after:border-t-green-500 after:border-r-green-500 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-full"
    }`,
    draw: "after:content-[''] after:animate-check after:scale-x-[-1] after:rotate-[-135deg]",
  };

  return (
    <div class={styles["loader"]}>
      <div class={`${styles["checkmark"]} ${styles["draw"]}`}></div>
    </div>
  );
};

export default ProgressSpinner;
