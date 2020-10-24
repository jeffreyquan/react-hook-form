import React from "react";
import Container from "@material-ui/core/Container";
import { Home } from "./pages/Home";
import { DrawerProvider } from "./utils/useDrawer";
import { SupportProvider } from "./utils/useSupport";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        <DrawerProvider>
          <SupportProvider>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </SupportProvider>
        </DrawerProvider>
      </Container>
    </Router>
  );
}

export default App;
