type Props = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: Props) => {
  return (
    <div className="flex space-x-2 text-8xl font-bold uppercase font-mono mb-10">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-4 border-black">
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
