import React from "react";

//children is destructured from props object.
function Parent({ children }) {
  console.log(children);
  return <div>{children}</div>; //children are all children in b/n Parent tags.
}

export default Parent;
