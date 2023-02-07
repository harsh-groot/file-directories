import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useRef, useState } from "react";
import UploadIcon from '@mui/icons-material/Upload';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FolderIcon from '@mui/icons-material/Folder';
import { fileUpload } from "../api/fileUpload";
import { folderUpload } from "../api/folderUpload";


function FileUpload(props) {
  const inputFileRef = useRef(null);
  const inputFolderRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();


  const handleClick = () => {
    setOpen(!open);
  };

  console.log("file",inputFileRef);
  console.log("folder",inputFolderRef);

  const handleFileClick = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (e) => {
    fileUpload(e.target.files[0]);
  }

  const handleFolderClick = () => {
    inputFolderRef.current.click();
  };

  const handleFolderChange = (e) => {
    folderUpload(e.target.files);
  }

  return (
    <div>
      <List
        sx={{ width: "70%", maxWidth: 200, bgcolor: "white", marginLeft:"20%", borderColor:"black" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton sx={{border :"1px solid", borderColor:"blue"}} onClick={handleClick}>
          <ListItemIcon><UploadIcon/></ListItemIcon>
          <ListItemText secondary="Upload" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton  sx={{ pl: 4 }}>
              <input
                style={{ display: "none" }}
                ref={inputFileRef}
                onChange={handleFileChange}
                type="file"
              />
              <ListItemIcon>
              <AttachFileIcon/>
            </ListItemIcon>
            <ListItemText onClick={handleFileClick} secondary="Files" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton  sx={{ pl: 4 }}>
              <input
                style={{ display: "none" }}
                ref={inputFolderRef}
                onChange={(e) => handleFolderChange(e)}
                type="file"
                webkitdirectory="true"
              />
              <ListItemIcon>
              <FolderIcon/>
            </ListItemIcon>
            <ListItemText onClick={handleFolderClick} secondary="Folder" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
}

export default FileUpload;
