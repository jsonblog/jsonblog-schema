import { validateBlog } from '../index';
import fs from 'fs';
import path from 'path';

describe('Blog Schema Validation', () => {
  const validBlog = {
    site: {
      title: 'My Blog',
      description: 'A test blog',
    },
    basics: {
      name: 'John Doe',
      label: 'Web Developer',
      email: 'john@example.com',
      url: 'https://example.com',
    },
    posts: [
      {
        title: 'First Post',
        description: 'My first blog post',
        source: './first-post.md',
        createdAt: '2023-01-01',
        updatedAt: '2023-01-02',
      },
    ],
  };

  it('should validate a correct blog object', async () => {
    const result = await validateBlog(validBlog);
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('should fail on missing required fields', async () => {
    const invalidBlog = {
      site: {
        description: 'Missing title',
      },
      basics: {
        name: 'John Doe',
      },
      posts: [],
    };

    const result = await validateBlog(invalidBlog);
    expect(result.success).toBe(false);
    expect(result.error).toContain('site.title');
  });

  it('should validate dates correctly', async () => {
    const blogWithInvalidDate = {
      ...validBlog,
      posts: [
        {
          ...validBlog.posts[0],
          createdAt: '2023/01/01', // Wrong format
        },
      ],
    };

    const result = await validateBlog(blogWithInvalidDate);
    expect(result.success).toBe(false);
    expect(result.error).toContain('createdAt');
  });

  it('should allow optional fields to be omitted', async () => {
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

    const result = await validateBlog(minimalBlog);
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('should validate sample.blog.json', async () => {
    const samplePath = path.join(__dirname, '../../sample.blog.json');
    const sampleBlog = JSON.parse(fs.readFileSync(samplePath, 'utf8'));
    const result = await validateBlog(sampleBlog);
    expect(result.success).toBe(true);
    expect(result.error).toBeUndefined();
  });
});
