import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only rin once when the app component loads..

    // it's a listener, if we login it's refire the code, if we log out it's refire the code...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is: ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // blank [] means run's at loading, but if we write 'user' or 'basket'
    // then it will reloads the component when the user or basket change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    //BEM (It's means class name goes according to BEM convention for CSS: https://getbem.com/naming/)
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
