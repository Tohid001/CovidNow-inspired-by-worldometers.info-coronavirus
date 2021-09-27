import React, { useEffect } from "react";

function Dummy() {
  useEffect(() => {
    setTimeout(() => {
      console.log("I am dummy");
    }, 3000);
  });
  console.log("I am dummy");
  return <div>hello</div>;
}

export default Dummy;
