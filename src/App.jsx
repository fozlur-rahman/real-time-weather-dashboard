import "./App.css";
import Page from "./Page";
import { FavoriteProvider, LocationProvider, WeatherProvider } from "./provider";
function App() {
    return (
        <>
            <LocationProvider>
                <FavoriteProvider>
                    <WeatherProvider>
                        <Page />
                    </WeatherProvider>
                </FavoriteProvider>
            </LocationProvider>
        </>
    );
}

export default App;
