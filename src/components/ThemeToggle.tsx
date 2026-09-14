import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme !== "system") {
      root.classList.add(theme);
    }

    if (theme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className="theme-toggle" aria-label="Theme selection">
      <button
        className={theme === "light" ? "active" : ""}
        onClick={() => setTheme("light")}
        aria-label="Light mode"
      >
        ☀
      </button>

      <button
        className={theme === "system" ? "active" : ""}
        onClick={() => setTheme("system")}
        aria-label="Use system theme"
      >
        ◐
      </button>

      <button
        className={theme === "dark" ? "active" : ""}
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
      >
        ☾
      </button>
    </div>
  );
}

export default ThemeToggle;
