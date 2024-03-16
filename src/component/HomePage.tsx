//@ts-nocheck
import React, { useEffect, useState } from "react";
import ShowDocument from "./ShowDocument";

const HomePage = () => {
  const [isDocPageShow, setIsDocPageShow] = useState(false);

  const toggleDocumentShow = () => {
    setIsDocPageShow((prevState) => !prevState);
  };
  // useEffect(()=>{
  //   const fetchContent = async () => {
  //     const response = await fetch("https://api.github.com/repos/krishnakodoth/LearnHub/contents")
  //     const data = await response.json();
  //     console.log(data);
  //   }

  //   fetchContent();
  // });

  const code = {
    name: "JavaScript",
    path: "JavaScript",
    sha: "079c04503dd2da99f1963724464bd8401a246105",
    size: 0,
    url: "https://api.github.com/repos/krishnakodoth/LearnHub/contents/JavaScript?ref=main",
    html_url: "https://github.com/krishnakodoth/LearnHub/tree/main/JavaScript",
    git_url:
      "https://api.github.com/repos/krishnakodoth/LearnHub/git/trees/079c04503dd2da99f1963724464bd8401a246105",
    download_url: null,
    type: "dir",
    _links: {
      self: "https://api.github.com/repos/krishnakodoth/LearnHub/contents/JavaScript?ref=main",
      git: "https://api.github.com/repos/krishnakodoth/LearnHub/git/trees/079c04503dd2da99f1963724464bd8401a246105",
      html: "https://github.com/krishnakodoth/LearnHub/tree/main/JavaScript",
    },
  };
  return (
    <div>
      <p>https://api.github.com/repos/krishnakodoth/LearnHub/contents</p>
      <p>
        https://api.github.com/repos/krishnakodoth/LearnHub/contents/JavaScript/Closures.md?ref=main
      </p>
      <p>application/vnd.github.v3.raw</p>
      <div
        style={{
          display: "flex",
          width: "100%",
          border: "solid 1px",
          wordBreak: "break-word",
          padding: "10px",
          lineHeight: "35px",
        }}
      >
        {JSON.stringify(code)}
      </div>

      <button onClick={toggleDocumentShow}>
        {isDocPageShow ? "Hide" : "Show"} Documents
      </button>

        {
          isDocPageShow && (
            <ShowDocument />
          )
        }

    </div>
  );
};

export default HomePage;
