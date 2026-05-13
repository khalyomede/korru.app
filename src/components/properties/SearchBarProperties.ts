import { JSX } from "solid-js";

interface LandingSearchBarProperties {
    id: string,
    value: string,
    placeholder: string,
    onInput?: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> | undefined,
    onFocus?: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent> | undefined
};

export default LandingSearchBarProperties;
