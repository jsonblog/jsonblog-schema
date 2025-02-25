import { z } from 'zod';
export declare const BlogSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    site: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">>;
    basics: z.ZodObject<{
        name: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        name: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        name: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">>;
    posts: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">>, "many">;
    pages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">>, "many">>;
}, "strict", z.ZodTypeAny, {
    site: {
        title: string;
        description?: string | undefined;
    } & {
        [k: string]: any;
    };
    basics: {
        name: string;
        label?: string | undefined;
        image?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        url?: string | undefined;
    } & {
        [k: string]: any;
    };
    posts: z.objectOutputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">[];
    $schema?: string | undefined;
    pages?: z.objectOutputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">[] | undefined;
}, {
    site: {
        title: string;
        description?: string | undefined;
    } & {
        [k: string]: any;
    };
    basics: {
        name: string;
        label?: string | undefined;
        image?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        url?: string | undefined;
    } & {
        [k: string]: any;
    };
    posts: z.objectInputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">[];
    $schema?: string | undefined;
    pages?: z.objectInputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodAny, "strip">[] | undefined;
}>;
export type Blog = z.infer<typeof BlogSchema>;
export declare function validateBlog(blog: unknown): Promise<{
    success: boolean;
    error?: string;
}>;
