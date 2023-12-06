import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Ifnotuser from "./components/Ifnotuser";
import Protected from "./components/Protected";
import Notuser from "./components/Notuser";

import { action, userSelect } from "./redux/user";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavPage from "./components/FavPage";

const App = () => {
  const user = useSelector(userSelect)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        // user is logged in
        dispatch(
          action.login({
            email: userCredential.email,
            displayName: userCredential.displayName,
            uid: userCredential.uid,
          })
        );
      } else {
        dispatch(action.logout());
      }
    });

    // Cleanup function to unsubscribe from the auth state changes
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={user !== null ? <NewsBoard category="general" /> : <Ifnotuser/>} />
          <Route
            path="/technology"
            element={<NewsBoard category="technology" />}
          />
          <Route path="/business" element={<Protected><NewsBoard category="business" /></Protected>} />
          <Route path="/health" element={<Protected><NewsBoard category="health" /></Protected>} />
          <Route path="/science" element={<Protected><NewsBoard category="science" /></Protected>} />
          <Route path="/sports" element={<Protected><NewsBoard category="sports" /></Protected>} />
          <Route
            path="/entertainment"
            element={<Protected><NewsBoard category="entertainment" /></Protected>}
          />
          <Route
            path="/fav"
            element={<Protected><FavPage/></Protected>}
          />

          <Route path="/login" element={<Notuser><Login /></Notuser>} />
          <Route path="/signup" element={<Notuser><Signup /></Notuser>} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
