"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
exports.validateBlog = validateBlog;
const zod_1 = require("zod");
// Core blog schema
exports.BlogSchema = zod_1.z.object({
    site: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        language: zod_1.z.string().optional(),
        url: zod_1.z.string().url().optional(),
        favicon: zod_1.z.string().optional(),
    }),
    basics: zod_1.z.object({
        name: zod_1.z.string(),
        label: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        website: zod_1.z.string().url().optional(),
        summary: zod_1.z.string().optional(),
        location: zod_1.z.object({
            city: zod_1.z.string().optional(),
            region: zod_1.z.string().optional(),
            country: zod_1.z.string().optional(),
        }).optional(),
        profiles: zod_1.z.array(zod_1.z.object({
            network: zod_1.z.string(),
            url: zod_1.z.string().url(),
            username: zod_1.z.string().optional(),
        })).optional(),
    }),
    posts: zod_1.z.array(zod_1.z.object({
        title: zod_1.z.string(),
        slug: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        contentUrl: zod_1.z.string().optional(),
        excerpt: zod_1.z.string().optional(),
        publishedDate: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        modifiedDate: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
        draft: zod_1.z.boolean().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        categories: zod_1.z.array(zod_1.z.string()).optional(),
        authors: zod_1.z.array(zod_1.z.string()).optional(),
        featured: zod_1.z.boolean().optional(),
        metadata: zod_1.z.record(zod_1.z.any()).optional(),
    })),
    pages: zod_1.z.array(zod_1.z.object({
        title: zod_1.z.string(),
        slug: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        contentUrl: zod_1.z.string().optional(),
        order: zod_1.z.number().optional(),
        metadata: zod_1.z.record(zod_1.z.any()).optional(),
    })).optional(),
    navigation: zod_1.z.array(zod_1.z.object({
        label: zod_1.z.string(),
        url: zod_1.z.string(),
        order: zod_1.z.number().optional(),
    })).optional(),
    theme: zod_1.z.object({
        colors: zod_1.z.record(zod_1.z.string()).optional(),
        fonts: zod_1.z.record(zod_1.z.string()).optional(),
        layout: zod_1.z.record(zod_1.z.any()).optional(),
    }).optional(),
});
// Validation function
function validateBlog(blog) {
    try {
        exports.BlogSchema.parse(blog);
        return { success: true };
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return {
                success: false,
                error: error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('\n')
            };
        }
        return { success: false, error: 'Unknown validation error' };
    }
}
