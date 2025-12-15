import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'stats',
            title: 'Key Impact/Stats',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'tech',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'links',
            title: 'Links',
            type: 'object',
            fields: [
                { name: 'demo', type: 'url', title: 'Live Demo URL' },
                { name: 'code', type: 'url', title: 'Source Code URL' },
            ],
        }),
        defineField({
            name: 'color',
            title: 'Brand Color (Tailwind Class)',
            type: 'string',
            description: 'e.g. from-blue-500',
        }),
    ],
})
