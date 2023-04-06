import { useEffect, useState } from 'react';
import * as NotesApi from '../network/notes-api';


function Users() {
    
    interface DataType {
  id: number;
  orgName: string;
  userName: string;
  accountBalance: number;
  phoneNumber: number;

  

    }
  const [users, setUsers] = useState<Array<DataType>>([]);


    

  useEffect(()=>{
    async function getUsers(){
      try {
       const users = await NotesApi.fetchUsers()
        setUsers(users);
        
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    getUsers();
  },[]);
  return (
    <>
     
<table className="table table-bordered mt-5 ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Organization</th>
                <th scope="col">Username</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Account  Balance</th>
                
              </tr>
            </thead>
            <tbody >
       {users.map(user =>(<tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                  
                    <td>{user.phoneNumber}</td>
                    <td>{user.accountBalance}</td>
                    <td></td>

                  </tr>
          
          
          
          ))}
          </tbody>
          </table>
    </>
  );

         
        
        
        
         

   
}

export default Users;
