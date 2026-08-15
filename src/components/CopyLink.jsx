import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

function CopyLink({ toCopy, className }) {
  const [copied, setCopied] = useState(false);
  const onTextCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <CopyToClipboard text={toCopy} onCopy={onTextCopied}>
      <span
        className={`cursor-pointer text-white/70 hover:text-white/90 text-[1.1vw] ${className}`}
      >
        Copy Link ⧉ {copied ? "| Copied" : ""}
      </span>
    </CopyToClipboard>
  );
}

export default CopyLink;
