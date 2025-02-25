"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
exports.validateBlog = validateBlog;
const zod_1 = require("zod");
// ISO8601 date format (YYYY-MM-DD)
const iso8601 = zod_1.z.string().regex(/^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$/);
// Core blog schema
exports.BlogSchema = zod_1.z.object({
    $schema: zod_1.z.string().url().optional(),
    site: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string().optional(),
    }).catchall(zod_1.z.any()),
    basics: zod_1.z.object({
        name: zod_1.z.string(),
        label: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().optional(),
        url: zod_1.z.string().url().optional(),
    }).catchall(zod_1.z.any()),
    posts: zod_1.z.array(zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        source: zod_1.z.string().optional(),
        createdAt: iso8601.optional(),
        updatedAt: iso8601.optional(),
    }).catchall(zod_1.z.any())),
    pages: zod_1.z.array(zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        source: zod_1.z.string().optional(),
        createdAt: iso8601.optional(),
        updatedAt: iso8601.optional(),
    }).catchall(zod_1.z.any())).optional(),
}).strict();
// Validation function
async function validateBlog(blog) {
    try {
        await Promise.resolve(exports.BlogSchema.parseAsync(blog));
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
