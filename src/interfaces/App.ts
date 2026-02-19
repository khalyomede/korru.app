import AppIcon from "./AppIcon";
import AppScreenshot from "./AppScreenshot";

/**
 * @see https://www.w3.org/TR/appmanifest/#web-application-manifest
 */
interface App {
    id: number;
    name: string;
    description: string;
    icon: AppIcon;
    url: string;
};

export default App;
