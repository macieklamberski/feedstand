import { db } from '~/instances/database'
import { FastifyRequest } from 'fastify'
import * as tables from '~/database/tables'
import { eq } from 'drizzle-orm'
import { fetchRecordById } from './fetchRecordById'
import { pick } from 'lodash-es'
import { parseRequestToSchema } from '~/helpers/routes'
import { createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const updateRecordById = async <T extends (typeof tables)[keyof typeof tables]>(
    request: FastifyRequest,
    table: T,
    fields: Array<keyof T['$inferSelect']>,
): Promise<T['$inferSelect']> => {
    const existingRecord = await fetchRecordById(request, table)

    const picked = Object.fromEntries(fields.map((field) => [field, true])) as any
    const schema = z.object({ body: createSelectSchema(table).pick(picked) })
    const { body } = parseRequestToSchema({ request, schema, showErrors: true })

    const [updatedRecord] = await db
        .update(table)
        .set({ ...existingRecord, ...pick(body, fields) })
        .where(eq(table.id, existingRecord.id))
        .returning()

    return updatedRecord
}
