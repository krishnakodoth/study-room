import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { HomeTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import { changeDir } from "../thunks/document.thunks";
import { memo } from "react";


const AddressBar = () => {
  const { selectedPath } = useSelector((state: RootState) => state.document);
  const dispatch = useAppDispatch();
  const handleFolderTranverse = (index: number) => {
    //@ts-ignore
    dispatch(changeDir({ index, selectedPath }));
  };
  return (
    <div
      style={{
        display: "flex",
        borderBottom: 'solid 1px #ddd',
        padding: "10px",
      }}
    >
      <AddressLinks onClick={() => handleFolderTranverse(-1)}>
        {" "}
        <HomeTwoTone />
      </AddressLinks>
      {selectedPath.map((row: any, index) => (
        
          <AddressLinks
            key={row.sha}
            onClick={() => handleFolderTranverse(index)}
          >
            {row.name}
          </AddressLinks>
      ))}
    </div>
  );
};

const AddressLinks = styled.div`
  color: #1677ff;
  cursor: pointer;

  &:not(:last-child):after {
    content: "/";
    display: inline-block;
    text-align: center;
    padding: 0 5px;
    color: #000;
  }
`;

export default memo(AddressBar);
