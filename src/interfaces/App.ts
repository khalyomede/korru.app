import Category from "../types/Category";
import AppIcon from "./AppIcon";

/**
 * @see https://www.w3.org/TR/appmanifest/#web-application-manifest
 */
interface App {
    id: number;
    name: string;
    description: string;
    icon: AppIcon;
    url: string;
    categories: Array<Category>;
};

export default App;
