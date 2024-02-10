import "./App.css";
import Page from "./Page";
import { FavoriteProvider, WeatherProvider } from "./provider";
function App() {
    return (
        <>
            <FavoriteProvider>
                <WeatherProvider>
                    <Page />
                </WeatherProvider>
            </FavoriteProvider>
        </>
    );
}

export default App;
