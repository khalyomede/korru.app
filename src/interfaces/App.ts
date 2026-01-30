import AppIcon from "./AppIcon";
import AppScreenshot from "./AppScreenshot";

/**
 * @see https://www.w3.org/TR/appmanifest/#web-application-manifest
 */
interface App {
    id: number;
    recommanded: boolean;
    name: string;
    description: string;
    icon: AppIcon;
    url: string;
    screenshots: Array<AppScreenshot>;
};

export default App;
