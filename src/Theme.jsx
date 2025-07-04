import { useTheme } from './ThemeContext';

export default function Theme(){
    const {theme, toggleTheme} = useTheme();
    const themeClass = theme==="dark" ? "dark" : "light";
    return (
        <>
        <div className={`app-container ${themeClass}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <p>Current theme is: {theme}</p>
        </div>
        </>
    )
}