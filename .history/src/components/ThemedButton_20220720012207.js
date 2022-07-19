import React from "react";

function ThemedButton({ theme, ...props }) {
  const { theme } = us
  return <button className={theme} {...props} />;
}

export default ThemedButton;
