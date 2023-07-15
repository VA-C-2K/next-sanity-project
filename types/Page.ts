import { PortableTextBlock } from "sanity";

export type Page = {
     _id: string;
     _createAt: Date;
     title:string;
     slug:string;
     content:PortableTextBlock[];
}