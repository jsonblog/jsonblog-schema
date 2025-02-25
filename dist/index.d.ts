import { z } from 'zod';
export declare const BlogSchema: z.ZodObject<{
    site: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        favicon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description?: string | undefined;
        language?: string | undefined;
        url?: string | undefined;
        favicon?: string | undefined;
    }, {
        title: string;
        description?: string | undefined;
        language?: string | undefined;
        url?: string | undefined;
        favicon?: string | undefined;
    }>;
    basics: z.ZodObject<{
        name: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        website: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodObject<{
            city: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            city?: string | undefined;
            region?: string | undefined;
            country?: string | undefined;
        }, {
            city?: string | undefined;
            region?: string | undefined;
            country?: string | undefined;
        }>>;
        profiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            network: z.ZodString;
            url: z.ZodString;
            username: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            url: string;
            network: string;
            username?: string | undefined;
        }, {
            url: string;
            network: string;
            username?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        label?: string | undefined;
        image?: string | undefined;
        email?: string | undefined;
        website?: string | undefined;
        summary?: string | undefined;
        location?: {
            city?: string | undefined;
            region?: string | undefined;
            country?: string | undefined;
        } | undefined;
        profiles?: {
            url: string;
            network: string;
            username?: string | undefined;
        }[] | undefined;
    }, {
        name: string;
        label?: string | undefined;
        image?: string | undefined;
        email?: string | undefined;
        website?: string | undefined;
        summary?: string | undefined;
        location?: {
            city?: string | undefined;
            region?: string | undefined;
            country?: string | undefined;
        } | undefined;
        profiles?: {
            url: string;
            network: string;
            username?: string | undefined;
        }[] | undefined;
    }>;
    posts: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        slug: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
        contentUrl: z.ZodOptional<z.ZodString>;
        excerpt: z.ZodOptional<z.ZodString>;
        publishedDate: z.ZodString;
        modifiedDate: z.ZodOptional<z.ZodString>;
        draft: z.ZodOptional<z.ZodBoolean>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        authors: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        featured: z.ZodOptional<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        publishedDate: string;
        slug?: string | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        excerpt?: string | undefined;
        modifiedDate?: string | undefined;
        draft?: boolean | undefined;
        tags?: string[] | undefined;
        categories?: string[] | undefined;
        authors?: string[] | undefined;
        featured?: boolean | undefined;
        metadata?: Record<string, any> | undefined;
    }, {
        title: string;
        publishedDate: string;
        slug?: string | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        excerpt?: string | undefined;
        modifiedDate?: string | undefined;
        draft?: boolean | undefined;
        tags?: string[] | undefined;
        categories?: string[] | undefined;
        authors?: string[] | undefined;
        featured?: boolean | undefined;
        metadata?: Record<string, any> | undefined;
    }>, "many">;
    pages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        slug: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
        contentUrl: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        slug?: string | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        metadata?: Record<string, any> | undefined;
        order?: number | undefined;
    }, {
        title: string;
        slug?: string | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        metadata?: Record<string, any> | undefined;
        order?: number | undefined;
    }>, "many">>;
    navigation: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodString;
        order: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        label: string;
        order?: number | undefined;
    }, {
        url: string;
        label: string;
        order?: number | undefined;
    }>, "many">>;
    theme: z.ZodOptional<z.ZodObject<{
        colors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        fonts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        layout: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        colors?: Record<string, string> | undefined;
        fonts?: Record<string, string> | undefined;
        layout?: Record<string, any> | undefined;
    }, {
        colors?: Record<string, string> | undefined;
        fonts?: Record<string, string> | undefined;
        layout?: Record<string, any> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    site: {
        title: string;
        description?: string | undefined;
        language?: string | undefined;
        url?: string | undefined;
        favicon?: string | undefined;
    };
    basics: {
        name: string;
        label?: string | undefined;
        image?: string | undefined;
        email?: string | undefined;
        website?: string | undefined;
        summary?: string | undefined;
        location?: {
            city?: string | undefined;
            region?: string | undefined;
            country?: string | undefined;
        } | undefined;
        profiles?: {
            url: string;
            network: string;
            username?: string | undefined;
        }[] | undefined;
    };
    posts: {
        title: string;
        publishedDate: string;
        slug?: string | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        excerpt?: string | undefined;
        modifiedDate?: string | undefined;
        draft?: boolean | undefined;
        tags?: string[] | undefined;
        categories?: string[] | undefined;
        authors?: string[] | undefined;
        featured?: boolean | undefined;
        metadata?: Record<string, any> | undefined;
    }[];
    pages?: {
        title: string;
        slug?: string | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        metadata?: Record<string, any> | undefined;
        order?: number | undefined;
    }[] | undefined;
    navigation?: {
        url: string;
        label: string;
        order?: number | undefined;
    }[] | undefined;
    theme?: {
        colors?: Record<string, string> | undefined;
        fonts?: Record<string, string> | undefined;
        layout?: Record<string, any> | undefined;
    } | undefined;
}, {
    site: {
        title: string;
        description?: string | undefined;
        language?: string | undefined;
        url?: string | undefined;
        favicon?: string | undefined;
    };
    basics: {
        name: string;
        label?: string | undefined;
        image?: string | undefined;
        email?: string | undefined;
        website?: string | undefined;
        summary?: string | undefined;
        location?: {
            city?: string | undefined;
            region?: string | undefined;
            country?: string | undefined;
        } | undefined;
        profiles?: {
            url: string;
            network: string;
            username?: string | undefined;
        }[] | undefined;
    };
    posts: {
        title: string;
        publishedDate: string;
        slug?: string | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        excerpt?: string | undefined;
        modifiedDate?: string | undefined;
        draft?: boolean | undefined;
        tags?: string[] | undefined;
        categories?: string[] | undefined;
        authors?: string[] | undefined;
        featured?: boolean | undefined;
        metadata?: Record<string, any> | undefined;
    }[];
    pages?: {
        title: string;
        slug?: string | undefined;
        content?: string | undefined;
        contentUrl?: string | undefined;
        metadata?: Record<string, any> | undefined;
        order?: number | undefined;
    }[] | undefined;
    navigation?: {
        url: string;
        label: string;
        order?: number | undefined;
    }[] | undefined;
    theme?: {
        colors?: Record<string, string> | undefined;
        fonts?: Record<string, string> | undefined;
        layout?: Record<string, any> | undefined;
    } | undefined;
}>;
export type Blog = z.infer<typeof BlogSchema>;
export declare function validateBlog(blog: unknown): {
    success: boolean;
    error?: string;
};
