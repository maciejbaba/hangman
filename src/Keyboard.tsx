import styles from "./Keyboard.module.css"

const STR_KEYS = "qwertyuiopasdfghjklzxcvbnm"
const KEYS: string[] = STR_KEYS.split("")

interface KeyboardProps {
  disabled?: boolean,
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) {
  return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
      }}
    >
    {KEYS.map(key => {
      const isActive = activeLetters.includes(key)
      const isInactive = inactiveLetters.includes(key)
      return (
        <button
          onClick={() => addGuessedLetter(key)}
          className={`${styles.btn}
            ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive: ""}
          `}
          disabled={isInactive || isActive || disabled}
          key={key}
        >
          {key}
        </button>
      )
    })}
    </div>
}