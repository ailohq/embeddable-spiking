import React, {useEffect} from "react";
import EmbeddableGLIncome from "@/app/EmbeddableGLIncome";
import {AnotherClickableComponent} from "@/app/AnotherClickableComponent";

export default function Index() {
    return (
        // 1. just component: working
        <>
            This is root index
            <EmbeddableGLIncome />
            {/*<AnotherClickableComponent />*/}
        </>
        //
    );
}
