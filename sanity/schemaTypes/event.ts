import { defineType, defineField } from 'sanity'
import { CalendarDays } from 'lucide-react'

export const event = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    icon: CalendarDays as any,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'Your role in the event (e.g., "Executive Head")',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
            description: 'Freeform date string (e.g., "4th & 5th June 2025")',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'attendees',
            title: 'Attendees Count',
            type: 'string',
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'metrics',
            title: 'Key Metrics',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'skills',
            title: 'Skills Gained',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'verified',
            title: 'Verified',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'accentColor',
            title: 'Accent Color (HSL Hue)',
            type: 'number',
            description: 'HSL hue for the page theme. Examples: 270=violet, 220=blue, 160=emerald, 340=rose, 30=amber',
            initialValue: 270,
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'object',
                    name: 'highlight',
                    title: 'Highlight Quote',
                    fields: [
                        { name: 'text', type: 'text', title: 'Quote Text' }
                    ]
                },
                {
                    type: 'object',
                    name: 'gridConfig',
                    title: 'Grid Configuration',
                    fields: [
                        { name: 'cols', type: 'number', title: 'Columns', initialValue: 3 },
                        {
                            name: 'items',
                            type: 'array',
                            title: 'Grid Items',
                            of: [{
                                type: 'object',
                                fields: [
                                    { name: 'title', type: 'string', title: 'Title' },
                                    { name: 'description', type: 'text', title: 'Description' }
                                ]
                            }]
                        }
                    ]
                }
            ],
        }),
    ],
})
