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

const Keyboard = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
        alignSelf: "stretch",
      }}
    >
      {KEYS.map((key) => (
        <button
          key={key}
          className="w-full border-2 border-black aspect-square text-2xl uppercase p-3 font-bold cursor-pointer text-black hover:bg-[#6464e0] focus:bg-[#6464e0]"
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
