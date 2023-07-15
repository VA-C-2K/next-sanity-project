import {defineConfig} from 'sanity';
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
    projectId: 'r09121g1',

    dataset: 'production',

    title:"My Personal Web",

    apiVersion:"2023-07-13",

    basePath:"/admin",

    plugins: [deskTool()],

    schema:{ types:schemas}
});


export default config;