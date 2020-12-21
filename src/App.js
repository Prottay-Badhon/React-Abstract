import './App.css';
import MyAxios from "./MyAxios";
import WritePost from "./WritePost";
import FunctionalHook from "./FunctionalHook"
import Navigation from "./Component/Navigation"
import MyNavbar from "./MyNavbar.js"
import MyRouter from "./Component/MyRouter";
import MyNavigation from "./Component/MyNavigation";
import {BrowserRouter} from "react-router-dom";
import Login from "./Component/Login";
import Son from "./Component/Son";
import {DadaProvider} from "./Component/MyContext";
function App() {
  return (
    <div className="App">
        <MyNavbar></MyNavbar>
        <FunctionalHook></FunctionalHook>
        <Navigation></Navigation>
        <BrowserRouter>
            <MyNavigation></MyNavigation>
            <MyRouter></MyRouter>
        </BrowserRouter>
        <Login></Login>

        <DadaProvider value="Dada send text-message to puti">
            <Son></Son>
        </DadaProvider>

    </div>
  );
}

export default App;
