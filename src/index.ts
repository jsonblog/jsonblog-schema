import { z } from 'zod';

// ISO8601 date format (YYYY-MM-DD)
const iso8601 = z.string().regex(/^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$/);

// Core blog schema
export const BlogSchema = z.object({
  $schema: z.string().url().optional(),
  site: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    url: z.string().url().optional(),
    summary: z.string().optional(),
    profiles: z.array(z.object({
      network: z.string(),
      username: z.string().optional(),
      url: z.string().url().optional(),
    }).catchall(z.any())).optional(),
  }).catchall(z.any()),

  basics: z.object({
    name: z.string(),
    label: z.string().optional(),
    image: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    url: z.string().url().optional(),
    summary: z.string().optional(),
    location: z.object({
      address: z.string().optional(),
      postalCode: z.string().optional(),
      city: z.string().optional(),
      countryCode: z.string().optional(),
      region: z.string().optional(),
    }).catchall(z.any()).optional(),
    profiles: z.array(z.object({
      network: z.string(),
      username: z.string().optional(),
      url: z.string().url().optional(),
    }).catchall(z.any())).optional(),
  }).catchall(z.any()),

  posts: z.array(z.object({
    title: z.string(),
    source: z.string().optional(),
    description: z.string().optional(),
    position: z.string().optional(),
    url: z.string().url().optional(),
    startDate: iso8601.optional(),
    endDate: iso8601.optional(),
    summary: z.string().optional(),
    highlights: z.array(z.string()).optional(),
  }).catchall(z.any())),
}).strict(); // This matches additionalProperties: false at the root level

// Type inference
export type Blog = z.infer<typeof BlogSchema>;

// Validation function
export function validateBlog(blog: unknown): { success: boolean; error?: string } {
  try {
    BlogSchema.parse(blog);
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('\n')
      };
    }
    return { success: false, error: 'Unknown validation error' };
  }
}
