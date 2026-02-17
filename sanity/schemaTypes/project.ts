import { defineType, defineField } from 'sanity'
import { FolderGit2 } from 'lucide-react'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: FolderGit2 as any,
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
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'iconName',
        title: 'Icon Name (Lucide)',
        type: 'string',
        description: 'Name of the Lucide icon to use (e.g., "Layout", "Server")',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'stats',
        title: 'Key Stat',
        type: 'string',
        description: 'e.g., "Saved 20% fuel costs / 99% Precision"',
    }),
    defineField({
      name: 'tech',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
        name: 'demoLink',
        title: 'Demo Link',
        type: 'url',
    }),
    defineField({
        name: 'codeLink',
        title: 'Code Link',
        type: 'url',
    }),
    defineField({
        name: 'color',
        title: 'Gradient Color Classes',
        type: 'string',
        description: 'Tailwind gradient classes (e.g., "from-purple-500 to-blue-600")',
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published At',
        type: 'date',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
