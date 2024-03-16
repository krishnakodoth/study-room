//@ts-nocheck
import React, { useEffect, useState } from "react";
import "github-markdown-css";
// import md from '../MD/example.md'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../store/store";
//@ts-ignore
import { Remarkable } from "remarkable";
import { useResolvedPath } from "react-router-dom";
import { fetchDocuments, fetchFileContent } from "../thunks/document.thunks";
import Spinner from "./Spinner";
import ListFolderStructure from "./ListFolderStructure";
import AddressBar from "./AddressBar";
import styled from "styled-components";

var md = new Remarkable();

interface IReadFile {
  mdFileName?: string;
}

const ShowDocument = () => {
  const { pathname } = useResolvedPath();
  const dispatch = useAppDispatch();
  const { docMenu, menuLoading, filePath, fileContent } = useSelector(
    (state: RootState) => state.document
  );

  useEffect(() => {
    dispatch(fetchDocuments({ key: "".sha, path: "" }));
  }, []);

  useEffect(() => {
    dispatch(fetchFileContent({ filePath }));
  }, [filePath]);

  

  // const handleMenuClick = (menuItem) => {
  //   console.log('handleMenuClick',menuItem)
  //   dispatch(fetchDocuments({key:menuItem.sha,path:menuItem.path}));
  // }

  if (menuLoading) return <Spinner />;
  return (
    <>
      <AddressBar />
      <div
        style={{
          display: "flex",
          padding: "10px",
          gap: "10px",
        }}
      >
        {docMenu.map(ListFolderStructure)}
      </div>
      {fileContent.length > 0 && (
        <MdWrapper>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: md.render(fileContent) }}
          />
        </MdWrapper>
      )}
    </>
  );

  //SyntaxHighlighter.highlight(content, language),
};

const MdWrapper = styled.div`
  padding: 10px;
  height: 70vh;
  overflow: auto;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: -3px -3px 10px 5px #00000040;
`;

export default ShowDocument;
