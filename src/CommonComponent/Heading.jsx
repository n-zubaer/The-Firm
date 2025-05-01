import React from "react";

const Heading = ({ headingStyle, headingContent, lastContent }) => {
  return (
    <h1 className={headingStyle}>
      {headingContent ? headingContent : ""}{" "}
      <span className="heading ml-2">{lastContent}</span>
    </h1>
  );
};

export default Heading;
