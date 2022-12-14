const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const letterClasses =
  "w-full border-2 border-black aspect-square text-2xl uppercase p-3 font-bold cursor-pointer text-black hover:bg-[#6464e0] focus:bg-[#6464e0] ";

type Props = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean; // optional prop
};

const Keyboard = ({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
        alignSelf: "stretch",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInctive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            disabled={isActive || isInctive || disabled}
            className={`${
              isActive
                ? letterClasses + "bg-[#6464e0] cursor-not-allowed"
                : letterClasses
            } ${isInctive ? "opacity-10 cursor-not-allowed" : letterClasses}`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
