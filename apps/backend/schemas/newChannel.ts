import { createInsertSchema } from 'drizzle-zod'
import { tables } from '../database/tables'

export const newChannel = createInsertSchema(tables.channels)
