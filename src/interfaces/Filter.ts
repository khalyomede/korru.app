import Category from "../types/Category";

interface Filter {
    id: number;
    name: string;
    categories: Array<Category>;
    selected: boolean;
};

export default Filter;
