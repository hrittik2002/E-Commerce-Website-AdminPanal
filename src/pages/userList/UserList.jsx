import styles from "./userList.module.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import {userRows} from "../../dummyData"

const UserList = () => {
  const [data , setData] = useState(userRows)

  const handleDelete = (id) => {
      setData(data.filter((item)=> item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'Username', width: 200 , renderCell : (params)=>{
      return (
        <div className={styles.userListUser}>
          <img className={styles.userListImg} src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
    { field: 'action', headerName: 'Action', width: 150 ,
      renderCell : (params) =>{
        return (
          <>
            <Link to={"/user/" + params.row.id}>
            <button className={styles.userListEdit}>Edit</button>
            </Link>
            <DeleteOutline className={styles.userListDelete} onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      } },
    
  ];
  
  
  return (
    <div className={styles.userList}>
        <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList