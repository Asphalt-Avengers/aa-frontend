import { z } from 'zod';

export const reportSchema = z
  .object({
    id: z.number(),
    geom: z.string(),
    geomJson: z.any(),
    description: z.string().nullable(),
    detections: z.array(z.any()), // Assuming Detection is another schema
    comments: z.string().nullable(),
    status: z.enum(['OPEN', 'IN_PROGRESS', 'RESOLVED']).nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    details: z.string().nullable(),
  })
  .passthrough();
