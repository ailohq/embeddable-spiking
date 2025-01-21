import {useEffect, useRef} from "react";

export function AnotherClickableComponent() {
    const ref = useRef(null);
    useEffect(() => {
        const div = ref.current as HTMLElement | null;
        if (!div) return;

        let clickCounter = 0;
        const button = document.createElement("div");
        button.addEventListener("click", () => {
            button.textContent = `Clicked: ${++clickCounter}`;
        });
        button.textContent = "Clicked: 0";

        const shadow = div.attachShadow({ mode: "open" });
        shadow.append(button);

        // div.append(button);
    }, []);

    return <div ref={ref} />;
}