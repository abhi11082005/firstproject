import React, { useState } from "react";

function EmailInput(type="email",placeholder="Enter Email Address",floatText="Email Address") {
  const [value, setValue] = useState("");

  return (
    <div className="relative  mt-8 bg-white w-[350px] rounded-lg ">
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="block w-full px-4 pt-6 pb-2 text-base text-gray-900 bg-gray-50 rounded-md border border-gray-800 appearance-none focus:outline-none    "
      />
      <label
        htmlFor={type}
        className="absolute text-purple-600 transition-all origin-left bg-white px-4"
        style={{
          transform:  "scale(0.75) translateY(-51px)" ,
          left: "16px",
          top: "50%",
          transformOrigin: "top left",
          pointerEvents: "none",
          // insetInlineStart: "40px",
          
        }}
      >
        {floatText}
      </label>
    </div>
  );
}

export default EmailInput;
