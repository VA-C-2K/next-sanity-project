import { createClient } from "next-sanity";
const client = createClient({
    projectId: 'r09121g1',

    dataset: 'production',

    apiVersion:"2023-07-13",
});

export default client;