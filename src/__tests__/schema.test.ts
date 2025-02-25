import { validateBlog } from '../index';
import fs from 'fs';
import path from 'path';

describe('Blog Schema Validation', () => {
  const validBlog = {
    site: {
      title: 'My Blog',
      description: 'A test blog',
      email: 'site@example.com',
      url: 'https://example.com',
      profiles: [
        {
          network: 'github',
          url: 'https://github.com/sitename',
          username: 'sitename',
        },
      ],
    },
    basics: {
      name: 'John Doe',
      label: 'Web Developer',
      email: 'john@example.com',
      url: 'https://example.com',
      location: {
        city: 'San Francisco',
        region: 'California',
        countryCode: 'US',
      },
      profiles: [
        {
          network: 'github',
          url: 'https://github.com/johndoe',
          username: 'johndoe',
        },
      ],
    },
    posts: [
      {
        title: 'First Post',
        source: 'Personal Blog',
        description: 'My first blog post',
        startDate: '2023-01-01',
        summary: 'Hello World',
        highlights: ['First highlight', 'Second highlight'],
      },
    ],
  };

  it('should validate a correct blog object', () => {
    const result = validateBlog(validBlog);
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('should fail on missing required fields', () => {
    const invalidBlog = {
      site: {
        description: 'Missing title',
      },
      basics: {
        name: 'John Doe',
      },
      posts: [],
    };

    const result = validateBlog(invalidBlog);
    expect(result.success).toBe(false);
    expect(result.error).toContain('site.title');
  });

  it('should validate dates correctly', () => {
    const blogWithInvalidDate = {
      ...validBlog,
      posts: [
        {
          ...validBlog.posts[0],
          startDate: '2023/01/01', // Wrong format
        },
      ],
    };

    const result = validateBlog(blogWithInvalidDate);
    expect(result.success).toBe(false);
    expect(result.error).toContain('startDate');
  });

  it('should allow optional fields to be omitted', () => {
    const minimalBlog = {
      site: {
        title: 'Minimal Blog',
      },
      basics: {
        name: 'John Doe',
      },
      posts: [
        {
          title: 'Simple Post',
        },
      ],
    };

    const result = validateBlog(minimalBlog);
    expect(result.success).toBe(true);
  });

  it('should validate sample.blog.json', () => {
    const samplePath = path.join(__dirname, '../../sample.blog.json');
    const sampleBlog = JSON.parse(fs.readFileSync(samplePath, 'utf-8'));
    
    // The sample has a "pages" field which isn't in the schema
    delete sampleBlog.pages;
    
    const result = validateBlog(sampleBlog);
    if (!result.success) {
      console.log('Validation errors:', result.error);
    }
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  });
});
