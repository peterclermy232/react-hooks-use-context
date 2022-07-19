import React from "react";
import

function ThemedButton({ theme, ...props }) {
  const { theme } = useContext(ThemeContext);
  return <button className={theme} {...props} />;
}

export default ThemedButton;
