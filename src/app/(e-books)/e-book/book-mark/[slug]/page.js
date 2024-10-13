import BookMarks from "@/components/e-book-components/bookMarks";
import Content from "@/components/e-book-components/content";
import ToolBar from "@/components/e-book-components/toolBar";
import React from "react";

function Page() {
  return (
    <div>
      <div className=" text-fontPrimary  ">
        <ToolBar />
        <BookMarks />
        <Content />
      </div>
    </div>
  );
}

export default Page;
