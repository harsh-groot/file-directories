import { Box, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useRef, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import fileDelete from "../api/fileDelete";
import { fileEditUpload } from "../api/fileEditUpload";
import { fileList } from "../api/fileList";

function FileList(props) {
  const inputEditFileRef = useRef(null);
  const [row, setRow] = useState([]);
  const [file, setFile] = useState();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fileName",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "extension",
      headerName: "Extension",
      width: 150,
      editable: true,
    },
    {
      field: "creationDate",
      headerName: "Creation Date",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 280,
      renderCell: (params) => {
        const onDelete = () => {
          console.log(params);
          confirmAlert({
            title: "Confirm to submit",
            message: "Are you sure to do this.",
            buttons: [
              {
                label: "Yes",
                onClick: () => {
                  fileDelete(params.id, setRow);
                },
              },
              {
                label: "No",
              },
            ],
          });
        };

        const handleEditFileClick = () => {
          inputEditFileRef.current.click();
        };

        const handleEditFileChange = (e) => {
          setFile(e.target.files[0]);
        };

        const handleEditFileSubmit = (e) => {
          e.preventDefault();
          fileEditUpload(params.id,file, setRow);
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              onClick={handleEditFileClick}
            >
              Edit
            </Button>
            <input
              style={{ display: "none" }}
              ref={inputEditFileRef}
              onChange={handleEditFileChange}
              file={file}
              type="file"
            />
           <Button onClick={(e) => handleEditFileSubmit(e)}>Upload</Button>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={onDelete}
            >
              Delete
            </Button>
          </Stack>
        );
      },
    },
  ];

  useEffect(() => {
    fileList(setRow)
  }, []);

  return (
    <div>
      <Box
        sx={{ height: 1000, width: "70%", marginLeft: "20%", marginTop: "2%" }}
      >
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}

export default FileList;
