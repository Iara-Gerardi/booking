"use client";
import React, { ReactNode, useState } from "react";

const containerStyles = `
[&_.container]:relative [&_.container]:overflow-hidden 
[&_.container]:after:w-full [&_.container]:after:h-full [&_.container]:after:animate-loading
[&_.container]:after:absolute [&_.container]:after:z-10 [&_.container]:after:top-0 [&_.container]:after:left-0
`;

// hacer que layout sea un server component ? lpm 
function Layout({
  callback,
  children,
}: {
  callback: () => void;
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  try {
    callback();
  } catch (err) {
    console.log(err);
  } finally {
    //setLoading(false);
  }

  return <div className={loading ? containerStyles : ""}>{children}</div>;
}

export default Layout;
