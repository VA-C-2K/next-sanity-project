import { PortableTextBlock } from "sanity";

export type Project = {
     _id: string;
     _createAt: Date;
     meta_title:string;
     name:string;
     slug:string;
     image:string;
     url:string;
     content:PortableTextBlock[];
}