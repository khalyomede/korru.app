import { Component, Show } from "solid-js";
import AppResultProperties from "./properties/AppResultProperties";
import AppResultOpenButton from "./AppResultOpenButton";

const AppResult: Component<AppResultProperties> = (properties) => {
    return (
        <div class="mb-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200 group">
            <div class="flex gap-4 items-center">
                <div class="shrink-0">
                    <img 
                        src={properties.app.icon.url} 
                        alt={properties.app.name} 
                        classList={{ 
                            "h-16": true, 
                            "w-16": true, 
                            "rounded-2xl": true,
                            "select-none": true,
                            "shadow-sm": true,
                            "group-hover:shadow-md": true,
                            "transition-shadow": true,
                            "duration-200": true,
                        }} 
                        loading="lazy" 
                    />
                </div>
                <div class="grow min-w-0">
                    <h3 class="text-lg font-semibold text-foreground tracking-tight truncate">
                        {properties.app.name}
                    </h3>
                    <Show when={properties.app.description.trim().length > 0}>
                        <p class="text-sm text-muted-foreground mt-0.5 line-clamp-2">
                            {properties.app.description}
                        </p>
                    </Show>
                </div>
                <div class="shrink-0">
                    <AppResultOpenButton text="Open" url={properties.app.url} />
                </div>
            </div>
        </div>
    );
};

export default AppResult;
