import React from "react";
i

function ThemedButton({ theme, ...props }) {
  const { theme } = useContext(ThemeContext);
  return <button className={theme} {...props} />;
}

export default ThemedButton;
