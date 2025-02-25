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
        image: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().optional(),
        url: zod_1.z.string().url().optional(),
        summary: zod_1.z.string().optional(),
        profiles: zod_1.z.array(zod_1.z.object({
            network: zod_1.z.string(),
            username: zod_1.z.string().optional(),
            url: zod_1.z.string().url().optional(),
        }).catchall(zod_1.z.any())).optional(),
    }).catchall(zod_1.z.any()),
    basics: zod_1.z.object({
        name: zod_1.z.string(),
        label: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().optional(),
        url: zod_1.z.string().url().optional(),
        summary: zod_1.z.string().optional(),
        location: zod_1.z.object({
            address: zod_1.z.string().optional(),
            postalCode: zod_1.z.string().optional(),
            city: zod_1.z.string().optional(),
            countryCode: zod_1.z.string().optional(),
            region: zod_1.z.string().optional(),
        }).catchall(zod_1.z.any()).optional(),
        profiles: zod_1.z.array(zod_1.z.object({
            network: zod_1.z.string(),
            username: zod_1.z.string().optional(),
            url: zod_1.z.string().url().optional(),
        }).catchall(zod_1.z.any())).optional(),
    }).catchall(zod_1.z.any()),
    posts: zod_1.z.array(zod_1.z.object({
        title: zod_1.z.string(),
        source: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        position: zod_1.z.string().optional(),
        url: zod_1.z.string().url().optional(),
        startDate: iso8601.optional(),
        endDate: iso8601.optional(),
        summary: zod_1.z.string().optional(),
        highlights: zod_1.z.array(zod_1.z.string()).optional(),
    }).catchall(zod_1.z.any())),
}).strict(); // This matches additionalProperties: false at the root level
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
