import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Dashboard.module.scss";
import ellipse from "../../assets/dashboard/Ellipse 1.png";
import female from "../../assets/dashboard/female.png";
import male from "../../assets/dashboard/male.png";
import group from "../../assets/dashboard/group.png";
import database1 from "../../assets/dashboard/database1.png";
import database2 from "../../assets/dashboard/database2.png";
import { useEffect, useState } from "react";
import * as NotesApi from "../../network/notes-api";
import TopNav from "./TopNav";

export default function Dashboard() {
  interface DataType {
    id: number;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: number;
    createdAt: string;
    status: string;
  }
  const [users, setUsers] = useState<Array<DataType>>([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await NotesApi.fetchUsers();
        setUsers(users);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    getUsers();
  }, []);

  return (
    <>
      <TopNav />
      <section className={styles.userSection}>Users</section>
      <div className={styles.usersTable}>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col" className={styles.tHeader1}>
                Organization
              </th>
              <th scope="col" className={styles.tHeader2}>
                Username
              </th>
              <th scope="col" className={styles.tHeader3}>
                Email
              </th>
              <th scope="col" className={styles.tHeader4}>
                Phone Number
              </th>
              <th scope="col" className={styles.tHeader5}>
                Date Joined
              </th>
              <th scope="col" className={styles.tHeader6}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className={styles.cell}>{user.orgName}</td>
                <td className={styles.cell}>{user.userName}</td>

                <td className={styles.cell}>{user.email}</td>
                <td className={styles.cell}>{user.phoneNumber}</td>
                <td className={styles.cell}>{user.createdAt}</td>
                <td className={styles.cell}>{user.status}</td>
                <td className={styles.cell}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <Card className={styles.card1}>
          <CardContent>
            <Typography>
              <img src={ellipse} alt="ellipse" className={styles.ellipse} />
            </Typography>
            <Typography>
              <img src={female} alt="female" className={styles.female} />
            </Typography>
            <Typography>
              <img src={male} alt="male" className={styles.male} />
            </Typography>
            <Typography className={styles.dashText1}>Users</Typography>
            <Typography className={styles.dashFigure}>2,453</Typography>
          </CardContent>
        </Card>
        <Card className={styles.card2}>
          <CardContent>
            <Typography>
              <img src={ellipse} alt="ellipse" className={styles.ellipse} />
            </Typography>
            <Typography>
              <img src={group} alt="group" className={styles.group} />
            </Typography>

            <Typography className={styles.dashText2}>Active Users</Typography>
            <Typography className={styles.dashFigure}>2,453</Typography>
          </CardContent>
        </Card>
        <Card className={styles.card3}>
          <CardContent>
            <Typography>
              <img src={ellipse} alt="ellipse" className={styles.ellipse} />
            </Typography>
            <Typography>
              <img
                src={database1}
                alt="database"
                className={styles.database1}
              />
            </Typography>
            <Typography>
              <img
                src={database2}
                alt="database"
                className={styles.database2}
              />
            </Typography>
            <Typography className={styles.dashText3}>
              Users with Loan
            </Typography>
            <Typography className={styles.dashFigure}>12,453</Typography>
          </CardContent>
        </Card>
        <Card className={styles.card4}>
          <CardContent>
            <Typography>
              <img src={ellipse} alt="ellipse" className={styles.ellipse} />
            </Typography>
            <Typography>
              <img
                src={database2}
                alt="database"
                className={styles.database3}
              />
            </Typography>
            <Typography>
              <img
                src={database2}
                alt="database"
                className={styles.database4}
              />
            </Typography>
            <Typography className={styles.dashText4}>
              Users with Savings
            </Typography>
            <Typography className={styles.dashFigure}>102,453</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
