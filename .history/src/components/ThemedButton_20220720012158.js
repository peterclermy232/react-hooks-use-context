import React from "react";

function ThemedButton({ theme, ...props }) {
  const { them}
  return <button className={theme} {...props} />;
}

export default ThemedButton;
