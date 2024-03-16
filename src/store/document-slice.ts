import { createSlice } from "@reduxjs/toolkit";
import { changeDir, fetchDocuments, fetchFileContent, folderSelection } from "../thunks/document.thunks";

const initialState = {
  docPath: "",
  docStructure: [],
  docMenu: [],
  selectedPath: [],
  filePath:"",
  fileContent:"",
  menuLoading: false,
};
export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setFilePath: (state, action) => {
      state.filePath = action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.menuLoading = true;
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.menuLoading = false;
        console.log("action.payload", action.payload);
        state.docMenu = action.payload;
        // const {folderPath,contentStructure} = action.payload;
        // state.docPath = folderPath
        // state.docStructure = contentStructure
        // state.docMenu = contentStructure
      })
      .addCase(folderSelection.pending, (state) => {
        state.menuLoading = true;
      })
      .addCase(folderSelection.fulfilled, (state,action) => {
        state.menuLoading = false;
        //@ts-ignore
        const { sha, name, path, url } = action.payload.request;
        
        //@ts-ignore
        const indexOfItem = state.selectedPath.findIndex(
          (path: any) => path.sha === sha
        );
        if (indexOfItem === -1) {
          // Push item to selected path
          //@ts-ignore
          state.selectedPath.push({
            sha,
            name,
            path,
            url,
          });
        }
        else{
          // Remove Item
        }

        state.filePath = "";
        state.fileContent = "";
        state.docMenu = action.payload.data;
      })
      .addCase(fetchFileContent.fulfilled, (state,action) => {
        state.menuLoading = false;
        //@ts-ignore
        state.fileContent = action.payload;
      })
      .addCase(changeDir.pending, (state) => {
        state.menuLoading = true;
      })
      .addCase(changeDir.fulfilled, (state,action) => {
        state.menuLoading = false;
        state.filePath = "";
        state.fileContent = "";
        state.docMenu = action.payload.data;
        //@ts-ignore
        state.selectedPath = action.payload.selectedPath;
      });
  },
});

export const { setFilePath } = documentSlice.actions;

export default documentSlice.reducer;
