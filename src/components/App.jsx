import { Statistic } from "Statistic/Statistic";
import { Profile } from "./Profile/Profile";
import { statistic, user, friends, transactions} from "./Store/State";
import classes from './App.module.css';
import { Friends } from "./Friends/Friends";
import { Transactions } from "./Transactions/Transactions";

export const App = () => {
  return (
    <div className={classes.appContainer}>
      <Profile user={user}/>
      <Statistic statistic={statistic}/>
      <Friends friends={friends}/>
      <Transactions transactions={transactions}/>
    </div>
  )};
