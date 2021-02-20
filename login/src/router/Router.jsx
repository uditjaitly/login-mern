import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
const Router = () => {
  return (<BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/signup" exact={true} component={Signup}></Route>
        
        
        
        </Switch>
    
    
    
    
    </BrowserRouter>);
};

export default Router;
