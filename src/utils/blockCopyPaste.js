"use client";

import React, {useEffect} from "react";

function BlockCopyPaste({children}) {
  const blockCopyPaste = (event) => {
    if (event.type === "copy" || event.type === "paste") {
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("copy", blockCopyPaste);
    document.addEventListener("paste", blockCopyPaste);

    return () => {
      document.removeEventListener("copy", blockCopyPaste);
      document.removeEventListener("paste", blockCopyPaste);
    };
  });

  return children;
}

export default BlockCopyPaste;
