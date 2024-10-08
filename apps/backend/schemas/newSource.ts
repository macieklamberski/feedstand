import { createInsertSchema } from 'drizzle-zod'
import { tables } from '../database/tables'

export const newSource = createInsertSchema(tables.sources)
