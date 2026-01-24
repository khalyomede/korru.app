import AppIcon from "./AppIcon";

interface App {
    id: number;
    name: string;
    description: string;
    icon: AppIcon;
    rating: number;
    url: string;
};

export default App;
