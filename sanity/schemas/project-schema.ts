const textEditorStyles = [
    { title: 'Paragraph', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Bullet', value: 'bullet' },
    { title: 'Numbered', value: 'number' },
    { title: 'Quote', value: 'blockquote' },
];

const project = {
    name:'project',

    title:'Projects',

    type:'document',

    groups: [
        {
          name: 'content',
          title: 'Content',
        },
        {
            name: 'meta',
            title: 'Meta',
        },
    ],

    fields:[
        {
            group: 'meta',
            name: 'meta_title',
            type: 'string',
            title: 'Meta title',
        },
        {
            group: 'content',
            name:'name',
            title:'title',
            type:'string',
        },{
            group: 'content',
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{ 
                source:'name',
                maxLength: 200,
                slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            },
        },{
            group: 'content',
            name:'image',
            title:"Image",
            type:'image',
            options:{ hotspot:true },
            fields:[
                {
                    name:'alt',
                    title:'Alt',
                    type:'string'
                }

            ],
        },
        {
            group: 'content',
            name:'url',
            title:'URL',
            type:'url',
        },
        {
            group: 'content',
            name:'content',
            title:'Content',
            type:'array',
            of: [
                {
                    type: 'block',
                    styles: textEditorStyles
                },
                {
                    type: 'image'
                }
            ],
        }
    ]
};

export default project;