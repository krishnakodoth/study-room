//@ts-nocheck
import React, { useEffect } from "react";
import { Layout, Menu, Spin } from "antd";
import { AppstoreOutlined,FileTextOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
// import { Routes } from "../router/router";
import { Link, useResolvedPath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../store/store";
import styled from "styled-components";
import { fetchDocuments } from "../thunks/document.thunks";

const { Sider } = Layout;

const SideMenu = () => {
  const { pathname } = useResolvedPath();
  const { menuLoading,docMenu } = useSelector((state: RootState) => state.document);

  const dispatch = useAppDispatch()
  // useEffect(()=>{
  //   dispatch(fetchDocuments({key:"",path:""}));
  // },[])


  const getMenuItem = (menuItem)=> {
    return{
      key: menuItem.sha,
      icon: React.createElement(menuItem.type === "dir" ? AppstoreOutlined : FileTextOutlined),
      label: <Link to={`/doc/${menuItem.sha}`}>{menuItem.name} </Link>,
      // onClick:() => handleMenuClick(menuItem),      
      // onOpenChange: () => alert("HELLO WORLD"),
      // children: (menuItem.type === "dir") ? [] : undefined
    }
    
  //   return{
  //   key: `/doc/${menuItem.filePath.replace("../","")}`,
  //   icon: React.createElement(menuItem.isDirectory ? AppstoreOutlined : FileTextOutlined),
  //   label: <Link to={"/doc/" + menuItem.filePath.replace("../","")}>{menuItem.fileName} </Link>,
  //   // onClick:handleMenuClick,
  //   children: (menuItem.isDirectory && menuItem.children) ? menuItem.children.map(getMenuItem) : undefined
  // }
};

  // const items: MenuProps["items"] = docMenu.map((item, index) => (getMenuItem(item)));
  const items = [];

  if(items.length === 0 && menuLoading){
    items.push({
      key: `doc-menu-loading...`,
      label: <SpinContainer> <Spin /> </SpinContainer>
    });
  }
  
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        className="appLogoWrapper"
        style={{ margin: "10px 0", padding: "25px 0" }}
      ></div>
      {/* {menuLoading && (
        <SpinContainer>
          <Spin />
        </SpinContainer>
      )}
      {!menuLoading && ( */}
        <Menu
          theme="dark"
          mode="inline"
          //defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          items={items}
        />
      {/* )} */}
    </Sider>
  );
};

const SpinContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export default SideMenu;
