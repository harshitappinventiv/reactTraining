import { BrowserRouter as Router } from "react-router-dom";
import StateProvider from "./modules/sushantSirContext/stateProvider";

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
// import ShubhamSirTwo from "./modules/shubhamSirTwo";
// import Counter from "./modules/prakashRedux/screen/counter";
// import HomePage from "./modules/prakashRedux/screen/homePage";
import SushantSirContext from "./modules/sushantSirContext";
// import RevisionAssignment from "./modules/revisionAssignment";

import reducer, { initialState } from "./modules/sushantSirContext/reducer";

// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <StateProvider initialState={initialState} reducer={reducer}>
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
            {/* <ShubhamSirTwo /> */}
            {/* <Counter />
            <HomePage /> */}
            <SushantSirContext />
            {/* <RevisionAssignment /> */}
          </div>
        </Router>
        {/* </Provider> */}
      </StateProvider>
    </>
  );
}

export default App;
