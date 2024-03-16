import { createAsyncThunk } from "@reduxjs/toolkit";

interface IParmType {
  folderPath?: string;
}
export const fetchDocuments = createAsyncThunk(
  "document/fetch",
  async (payload: IParmType) => {
    const { folderPath = "" } = payload;
    const url = `https://api.github.com/repos/krishnakodoth/LearnHub/contents/${folderPath}`;

    const data = await fetchGitTree(url);
    return data;

    // let param = (folderPath !=="") ? '&folderPath='+folderPath:"";
    // const response = await fetch(url);
    // const data = await response.json();
    // return data;

    // const { folderPath="" } = payload;
    // // TODO: fetch Offers from API here (install axios manually if needed)
    // const url = `http://localhost:8080/api/v1/folder-structure`;
    // let param = (folderPath !=="") ? '&folderPath='+folderPath:"";
    // const response = await fetch(url+param);
    // const data = await response.json();
    // return data;
  }
);

export const folderSelection = createAsyncThunk(
  "document/select-folder",
  async (payload) => {
    //@ts-ignore
    const data = await fetchGitTree(payload.url);
    
    // const response = await fetch(payload.url);
    // const data = await response.json();
    return { request: payload, data };
  }
);

export const fetchFileContent = createAsyncThunk(
  "document/fetchFileContent",
  async (payload) => {
    //@ts-ignore
    const response = await fetch(payload.filePath, {
      headers: {
        Accept: "application/vnd.github.v3.raw",
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();
    return data
  }
);

export const changeDir = createAsyncThunk(
  "document/changeDir",
  async (payload) => {
    //@ts-ignore
    const {index=-1, selectedPath=[]} = payload;
    const updatedSeletedPath = [...selectedPath].slice(0,index+1);
    const url =  (selectedPath && selectedPath[index]) ? selectedPath[index].url : "https://api.github.com/repos/krishnakodoth/LearnHub/contents/";
    const data = await fetchGitTree(url);
    return { selectedPath:updatedSeletedPath, data };
  }
);

const fetchGitTree = async (apiUr:string) => {
  //@ts-ignore
  const response = await fetch(apiUr);
  const data = await response.json();
  return data;
}