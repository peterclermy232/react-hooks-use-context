import React from "react";

function ThemedButton({ theme, ...props }) {
  const { theme } = useContext(ThemeC)
  return <button className={theme} {...props} />;
}

export default ThemedButton;
