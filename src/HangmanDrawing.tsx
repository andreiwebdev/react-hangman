import React from "react";

const HEAD = (
  <div className="w-[60px] h-[60px] rounded-full border-[10px] border-black absolute top-[50px] right-[-25px]" />
);
const BODY = (
  <div className="w-[10px] h-[100px] rounded-full bg-black absolute top-[100px] right-0" />
);
const RIGHT_ARM = (
  <div className="w-[100px] h-[10px] rounded-full bg-black absolute top-[140px] right-[-90px] rotate-[30deg]" />
);
const LEFT_ARM = (
  <div className="w-[100px] h-[10px] rounded-full bg-black absolute top-[140px] right-[-5px] rotate-[150deg]" />
);
const RIGHT_LEG = (
  <div className="w-[100px] h-[10px] rounded-full bg-black absolute top-[230px] right-[-70px] rotate-[60deg]" />
);
const LEFT_LEG = (
  <div className="w-[100px] h-[10px] rounded-full bg-black absolute top-[230px] right-[-20px] rotate-[-60deg]" />
);

const HangmanDrawing = () => {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
