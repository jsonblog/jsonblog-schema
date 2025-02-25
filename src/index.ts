import { z } from 'zod';

// ISO8601 date format (YYYY-MM-DD)
const iso8601 = z.string().regex(/^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$/);

// Core blog schema
export const BlogSchema = z.object({
  $schema: z.string().url().optional(),
  site: z.object({
    title: z.string(),
    description: z.string().optional(),
  }).catchall(z.any()),

  basics: z.object({
    name: z.string(),
    label: z.string().optional(),
    image: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    url: z.string().url().optional(),
  }).catchall(z.any()),

  posts: z.array(z.object({
    title: z.string(),
    description: z.string().optional(),
    source: z.string().optional(),
    createdAt: iso8601.optional(),
    updatedAt: iso8601.optional(),
  }).catchall(z.any())),

  pages: z.array(z.object({
    title: z.string(),
    description: z.string().optional(),
    source: z.string().optional(),
    createdAt: iso8601.optional(),
    updatedAt: iso8601.optional(),
  }).catchall(z.any())).optional(),
}).strict();

// Type inference
export type Blog = z.infer<typeof BlogSchema>;

// Validation function
export async function validateBlog(blog: unknown): Promise<{ success: boolean; error?: string }> {
  try {
    await Promise.resolve(BlogSchema.parseAsync(blog));
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
