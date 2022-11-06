import styles from "./Keyboard.module.css"

const STR_KEYS = "qwertyuiopasdfghjklzxcvbnm"
const KEYS: string[] = STR_KEYS.split("")

export function Keyboard() {
  return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
      }}
    >
    {KEYS.map(key => {
      return <button key={key}>{key}</button>
    })}
    </div>
}