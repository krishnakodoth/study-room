import React,{useState,useEffect} from 'react';


const ListMenu = () => {
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);

  const fileSystem = useFileSystem();

  // useEffect(() => {
  //   const scanFolder = async (folder) => {
  //     const files = await fileSystem.readDirectory(folder);

  //     for (const file of files) {
  //       if (file.isFile) {
  //         setFiles((prevFiles) => [...prevFiles, file]);
  //       } else if (file.isDirectory) {
  //         setFolders((prevFolders) => [...prevFolders, file]);
  //         await scanFolder(file.path);
  //       }
  //     }
  //   };

  //   scanFolder("/");
  // }, []);

  return (
    <ReactFileSystem
        rootDirName="documents" />
    // <div>
    //   <h1>Folder Scanner</h1>
    //   <ul>
    //     {files.map((file) => (
    //       <li key={file.path}>{file.name}</li>
    //     ))}
    //   </ul>
    //   <ul>
    //     {folders.map((folder) => (
    //       <li key={folder.path}>{folder.name}</li>
    //     ))}
    //   </ul>
    // </div>
  )
}

export default ListMenu