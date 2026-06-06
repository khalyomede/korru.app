import { Component } from "solid-js";
import {
    LayoutGrid,
    Gamepad2,
    Newspaper,
    Users,
    Wallet,
    Music,
    ShoppingBag,
    Wrench,
    Code2,
    Tag,
} from "lucide-solid";

type IconComponent = Component<{ size?: number; class?: string }>;

const iconByFilterName: Record<string, IconComponent> = {
    all: LayoutGrid,
    game: Gamepad2,
    news: Newspaper,
    social: Users,
    finance: Wallet,
    music: Music,
    shopping: ShoppingBag,
    tools: Wrench,
    developer: Code2,
};

export const getFilterIcon = (name: string): IconComponent =>
    iconByFilterName[name.toLowerCase()] ?? Tag;
