import type { StructureResolver } from 'sanity/structure'
import { FolderGit2, CalendarDays } from 'lucide-react'
import { Iframe } from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/structure'

// Helper to resolve preview URL based on document type
function getPreviewUrl(doc: any) {
  return doc?.slug?.current
    ? `http://localhost:3000/${doc._type === 'project' ? 'projects' : 'community'}/${doc.slug.current}`
    : 'http://localhost:3000'
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.documentTypeListItem('project')
        .title('Projects')
        .icon(FolderGit2 as any),

      S.documentTypeListItem('event')
        .title('Community Events')
        .icon(CalendarDays as any),

      S.divider(),
    ])

// Define default document node to add the Preview Panel
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (['project', 'event'].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: any) => getPreviewUrl(doc),
          reload: { button: true },
        })
        .title('Web Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}
