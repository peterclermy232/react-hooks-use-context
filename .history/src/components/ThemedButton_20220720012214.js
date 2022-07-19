import React from "react";

function ThemedButton({ theme, ...props }) {
  const { theme } = useContext(Them)
  return <button className={theme} {...props} />;
}

export default ThemedButton;
