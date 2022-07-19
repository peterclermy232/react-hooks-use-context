import React from "react";
import { T}

function ThemedButton({ theme, ...props }) {
  const { theme } = useContext(ThemeContext);
  return <button className={theme} {...props} />;
}

export default ThemedButton;
