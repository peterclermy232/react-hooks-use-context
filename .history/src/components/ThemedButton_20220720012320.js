import React from "react";
import { ThemeContext } from "../context"

function ThemedButton({ theme, ...props }) {
  const { theme } = useContext(ThemeContext);
  return <button className={theme} {...props} />;
}

export default ThemedButton;
