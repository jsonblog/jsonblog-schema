# JsonBlog Schema

[![npm version](https://badge.fury.io/js/jsonblog-schema.svg)](https://badge.fury.io/js/jsonblog-schema)
[![CI](https://github.com/jsonblog/jsonblog-schema/actions/workflows/ci.yml/badge.svg)](https://github.com/jsonblog/jsonblog-schema/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue.svg)](https://www.typescriptlang.org/)

A community-driven schema for blog content that emphasizes portability, extensibility, and content ownership. JsonBlog lets you define your blog's content in a structured way while maintaining complete freedom over how it's presented.

> **Note**: JsonBlog is in early development. The current schema focuses on core functionality, and we expect to add more blog-specific fields based on community feedback and real-world use cases. If you need fields that aren't yet supported, please open an issue to discuss them!

## Why JsonBlog?

- **Content Ownership**: Your blog content in a portable, standardized format
- **Platform Independence**: Switch between any static site generator that supports the schema
- **Flexible Content Sources**: Mix local, remote, and decentralized content seamlessly
- **Future-Proof**: Your content remains accessible even as platforms come and go
- **Community-Driven**: Schema evolves based on real-world needs and use cases

## Schema (v1.0.0)

```typescript
interface Blog {
  // Core blog information
  site: {
    title: string;
    description?: string;
    image?: string;
    email?: string;
    phone?: string;
    url?: string;
    summary?: string;
    profiles?: {
      network: string;
      username?: string;
      url?: string;
    }[];
  };

  // Author information
  basics: {
    name: string;
    label?: string;
    image?: string;
    email?: string;
    phone?: string;
    url?: string;
    summary?: string;
    location?: {
      address?: string;
      postalCode?: string;
      city?: string;
      countryCode?: string;
      region?: string;
    };
    profiles?: {
      network: string;
      username?: string;
      url?: string;
    }[];
  };

  // Blog posts
  posts: {
    title: string;
    source?: string;
    description?: string;
    position?: string;
    url?: string;
    startDate?: string; // YYYY-MM-DD
    endDate?: string; // YYYY-MM-DD
    summary?: string;
    highlights?: string[];
  }[];
}
```

## Versioning

The schema follows semantic versioning:
- MAJOR: Breaking changes to required fields
- MINOR: New optional fields or features
- PATCH: Documentation updates or bug fixes

Current stable version: 1.0.0 (backwards compatible with v0.x)

## Tools and Ecosystem

- [JsonBlog CLI](https://github.com/jsonblog/jsonblog-cli): Command-line tool for working with JsonBlog content
- [JsonBlog Generator Boilerplate](https://github.com/jsonblog/jsonblog-generator-boilerplate): Template for creating custom static site generators

## Contributing

JsonBlog is a community project and we welcome contributions of all kinds! Here's how you can help:

### 1. Propose Schema Improvements

Have ideas for new fields or improvements? Open an issue with:
- Your use case description
- Example JSON showing how you'd use it
- Benefits of adding these fields
- Any backward compatibility considerations

Common areas for expansion include:
- Blog-specific metadata (tags, categories, series)
- Content management fields (draft status, publish dates)
- SEO-related fields
- Analytics integration
- Comments and interactions

### 2. Share Your Experience

- Create and share blog generators using the schema
- Build tools around the ecosystem
- Write tutorials or blog posts about your JsonBlog setup
- Share example blog configurations

### 3. Development

```bash
# Clone the repository
git clone https://github.com/jsonblog/jsonblog-schema.git
cd jsonblog-schema

# Install dependencies
npm install

# Run tests
npm test

# Build TypeScript types
npm run build
```

### 4. Review and Discuss

- Join schema discussions in GitHub Issues
- Help review pull requests
- Test proposed changes in your projects
- Share feedback on schema evolution
- Help maintain backward compatibility

### 5. Documentation

- Improve the README
- Add examples and tutorials
- Translate documentation
- Document best practices and patterns

## Community

- [GitHub Issues](https://github.com/jsonblog/jsonblog-schema/issues): Feature requests, bug reports, and discussions
- [GitHub Discussions](https://github.com/jsonblog/jsonblog-schema/discussions): Share your experiences and ask questions

## License

MIT
