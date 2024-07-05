import {z} from 'zod'

export const isAcceptMessage = z.object({
    isAcceptMessage: z.boolean()
})