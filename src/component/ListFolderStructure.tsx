//@ts-nocheck
import { FolderTwoTone, FileTextTwoTone } from "@ant-design/icons";
import { setFilePath } from "../store/document-slice"
import { useAppDispatch } from "../store/store";
import { folderSelection } from "../thunks/document.thunks";
import AddressBar from "./AddressBar";
import styled from "styled-components";
import { memo } from "react";
import { Tooltip } from "antd";

const ListFolderStructure = (docItem) => {
  const dispatch = useAppDispatch();
  const typeIcon =
    docItem.type === "dir" ? <FolderTwoTone /> : <FileTextTwoTone />;

  const handleFolderSelection = (docItem) => {
    
    if(docItem.type === 'dir'){
      dispatch(folderSelection(docItem))
    }
    else{
      dispatch(setFilePath(docItem.git_url))
    }
  };

  return (
    
    
    <div
      key={docItem.sha}
      style={{
        display: "flex",
        gap: "5px",        
      }}
    >
      <div>{typeIcon}</div>
      <ListFileName
        onClick={()=>handleFolderSelection(docItem)}
      >
        <Tooltip key={docItem.sha} title={docItem.name} placement="bottom">{docItem.name}</Tooltip>        
      </ListFileName>
    </div>
  );
};

const ListFileName = styled.div`
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  white-space: nowrap;
`;

export default ListFolderStructure;
