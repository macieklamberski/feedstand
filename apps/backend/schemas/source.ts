import { createSelectSchema } from 'drizzle-zod'
import { tables } from '../database/tables'

export const source = createSelectSchema(tables.sources)
