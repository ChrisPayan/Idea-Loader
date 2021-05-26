import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import { Header } from "../Header/Header";
function HomePage() {
  const history = useHistory();
  const auth = useAuth();

  return (
    <>
      <Header />
      {/* hide actions if user is logged in */}
      {!auth.isLoggedIn() && (
        <>
          <button onClick={() => history.push("/login")}></button>
          <button onClick={() => history.push("/signup")}></button>
        </>
      )}
    </>
  );
}

export default HomePage;
