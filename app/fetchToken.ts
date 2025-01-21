const API_KEY = '<find this in 1 pass>';
const TOKEN_EXPIRY_IN_SECONDS =60*60*24*7;


export async function fetchToken({
                              embeddableId,
                              securityContext,
                              userKey
                          }: {
    embeddableId: string;
    securityContext: {
        organisationId: string
    };
    userKey?: string;
}): Promise<string> {
    console.log("Fetching Embeddable token...")

    try {
        //TODO confirm if there is other way of fetching the token, e.g., graphql API
        const response = await fetch(`https://api.us.embeddable.com/api/v1/security-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${API_KEY}` /* keep your API Key secure */
            },
            body: JSON.stringify({
                embeddableId, /* the dashboard to load */
                expiryInSeconds: TOKEN_EXPIRY_IN_SECONDS, /* token expiry */
                securityContext, /* any context you want to provide to the SQL data models */
                user: userKey // unique key representing current user
            })
        });

        console.log(`Response: ${response.status} ${response.statusText}`);
        const json = await response.json();
        if(!response.ok){
            console.log("Response error when fetching token:", json.errorMessage)
        }
        return json.token;
    } catch (error) {
        console.error("Error fetching token:", error)
        throw new Error();
    }
}