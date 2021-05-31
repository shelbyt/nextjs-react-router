import React from 'react';
import NextLink from 'next/link';
import { BrowserRouter as  Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import Profile from "./Profile";
// import About from "./About";
// import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <NextLink href="/settings">Settings (SSR)</NextLink>
      <NextLink href="/profile">Profile (SSR)</NextLink>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  )};
 

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//           <li>
//             <NextLink href="/settings">Settings (SSR)</NextLink>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/about">
//             <h1>About</h1>
//           </Route>
//           <Route path="/topics">
//             <h1>Topics</h1>
//           </Route>
//           <Route path="/">
//             <h1>Home</h1>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
