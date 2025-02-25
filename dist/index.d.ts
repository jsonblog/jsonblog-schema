import { z } from 'zod';
export declare const BlogSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    site: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        profiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        profiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        profiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>;
    basics: z.ZodObject<{
        name: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodObject<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>>;
        profiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        name: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodObject<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>>;
        profiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        name: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodObject<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>>;
        profiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>;
    posts: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        position: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        startDate: z.ZodOptional<z.ZodString>;
        endDate: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        highlights: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        title: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        position: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        startDate: z.ZodOptional<z.ZodString>;
        endDate: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        highlights: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        title: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        position: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        startDate: z.ZodOptional<z.ZodString>;
        endDate: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        highlights: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodAny, "strip">>, "many">;
}, "strict", z.ZodTypeAny, {
    site: {
        title: string;
        description?: string | undefined;
        image?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        url?: string | undefined;
        summary?: string | undefined;
        profiles?: z.objectOutputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">[] | undefined;
    } & {
        [k: string]: any;
    };
    basics: {
        name: string;
        image?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        url?: string | undefined;
        summary?: string | undefined;
        profiles?: z.objectOutputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">[] | undefined;
        label?: string | undefined;
        location?: z.objectOutputType<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip"> | undefined;
    } & {
        [k: string]: any;
    };
    posts: z.objectOutputType<{
        title: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        position: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        startDate: z.ZodOptional<z.ZodString>;
        endDate: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        highlights: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodAny, "strip">[];
    $schema?: string | undefined;
}, {
    site: {
        title: string;
        description?: string | undefined;
        image?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        url?: string | undefined;
        summary?: string | undefined;
        profiles?: z.objectInputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">[] | undefined;
    } & {
        [k: string]: any;
    };
    basics: {
        name: string;
        image?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        url?: string | undefined;
        summary?: string | undefined;
        profiles?: z.objectInputType<{
            network: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip">[] | undefined;
        label?: string | undefined;
        location?: z.objectInputType<{
            address: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            countryCode: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
        }, z.ZodAny, "strip"> | undefined;
    } & {
        [k: string]: any;
    };
    posts: z.objectInputType<{
        title: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        position: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        startDate: z.ZodOptional<z.ZodString>;
        endDate: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        highlights: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodAny, "strip">[];
    $schema?: string | undefined;
}>;
export type Blog = z.infer<typeof BlogSchema>;
export declare function validateBlog(blog: unknown): {
    success: boolean;
    error?: string;
};
