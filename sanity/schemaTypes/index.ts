import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { event } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, event],
}
