import React, {useEffect, useState} from "react";
import {fetchToken} from "./fetchToken";

const EMBEDDABLE_ID = '58fcf2db-1975-4e29-8111-7c913113d777';
const SECURITY_CONTEXT = {
    /* any context you want to provide to the SQL data models */
    organisationId: '7b3985bd-e3aa-4176-a16a-fe4c85151835'          //Dev Env Fake Realty org, this should be replaced with the useCurrentAgency org hook to get the org id
};
const USER_KEY = 'kevin@trunkplatform.com';   //Dev pm user, this should be replaced with useCurrentUser hook to get the email.


function Embeddable(props: { token: string }) {
    return React.createElement('em-beddable', props);
}

export default function EmbeddableGLIncome() {
    const [token, setToken] = useState("")

    const fetchEmbeddableToken = async () => {
        const fetchedToken = await fetchToken({
            embeddableId: EMBEDDABLE_ID,
            securityContext: SECURITY_CONTEXT,
            userKey: USER_KEY
        });
        setToken(fetchedToken);
    }

    useEffect(() => {
        fetchEmbeddableToken()
    }, []);

    console.log(`token=${token}`);


    return (
        <Embeddable
            token={token} base-url="https://api.us.embeddable.com/"
        />
    );
}

