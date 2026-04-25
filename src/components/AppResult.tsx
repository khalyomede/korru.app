import { Component, Show } from "solid-js";
import AppResultProperties from "./properties/AppResultProperties";
import AppResultOpenButton from "./AppResultOpenButton";

const AppResult: Component<AppResultProperties> = (properties) => {
    return (
        <div class="p-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors duration-200 group">
            <div class="flex gap-4 items-center">
                <div class="shrink-0">
                    <img 
                        src={properties.app.icon.url} 
                        alt={properties.app.name} 
                        classList={{ 
                            "h-14": true, 
                            "w-14": true, 
                            "rounded-xl": true,
                            "select-none": true,
                        }} 
                        loading="lazy" 
                    />
                </div>
                <div class="grow min-w-0">
                    <h3 class="text-base font-semibold text-foreground tracking-tight truncate">
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
