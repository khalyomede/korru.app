import { Component } from "solid-js";
import AppResultRatingProperties from "./properties/AppResultRatingProperties";

const AppResultRating: Component<AppResultRatingProperties> = (properties) => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
        <div class="flex space-x-1">
            {stars.map((star) => (
                <svg
                    key={star}
                    class={`w-5 h-5 ${star <= properties.rating ? 'text-yellow-400' : 'text-stone-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.917c1.927-2.746 5.174-2.746 7.098 0l1.414 1.414a6.002 6.002 0 01-8.51 8.51l-1.414-1.414A6.002 6.002 0 019.049 2.917z" />
                </svg>
            ))}
        </div>
    );
};

export default AppResultRating;
