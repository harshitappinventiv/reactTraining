import { BrowserRouter as Router } from "react-router-dom";
// import AssigmentOne from "./modules/assignmentOne";
// import AssigmentTwo from "./modules/assigmentTwo";
// import AssigmentThreeFlex from "./modules/assigmentThree/usingFlex";
// import AssigmentThreeGridMobileFirst from "./modules/assigmentThree/useGrid";
// import AssigmentFour from "./modules/assigmentFour";
// import SushantSirAssignment from "./modules/sushantSirAssignment";
// import SachinSir from "./modules/sachinSir";
// import EditScreen from "./modules/sachinSir/editScreen";
// import VivekSir from "./modules/vivekSir";
// import ShubhamSir from "./modules/shubhamSir";
import ShubhamSirTwo from "./modules/shubhamSirTwo";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* <AssigmentOne/> */}
          {/* <AssigmentTwo /> */}
          {/* <AssigmentThreeFlex /> */}
          {/* <AssigmentThreeGridMobileFirst /> */}
          {/* <AssigmentFour /> */}
          {/* <SushantSirAssignment /> */}
          {/* <Switch>
            <Route exact path="/" component={SachinSir} />
            <Route path="/editScreen/:params" component={EditScreen} />
          </Switch> */}
          {/* <VivekSir /> */}
          {/* <ShubhamSir /> */}
          <ShubhamSirTwo />
        </div>
      </Router>
    </>
  );
}

export default App;
