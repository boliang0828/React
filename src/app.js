// import React, { Component } from "react";
// import { admainRoute } from "./routes";
// import { Route, Redirect, Switch } from "react-router-dom";
// export default class App extends Component {
//   render() {
//     return (
//       <Switch>
//         {/* admin页面里的路由    dashboard article articleEdit settings */}
//         {admainRoute.map((route) => {
//           return (
//             <Route
//               path={route.pathname}
//               component={route.component}
//               exact={route.exact}
//             />
//           );
//         })}
//         {/* 重定向到 admin页面 */}
//         <Redirect to={admainRoute[0].pathname} from="/admin" exact />
//         <Redirect to="/404" />
//       </Switch>
//     );
//   }
// }
