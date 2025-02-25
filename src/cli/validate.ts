#!/usr/bin/env node
import { Command } from 'commander';
import fs from 'fs/promises';
import { validateBlog } from '../index';

const program = new Command();

program
  .name('jsonblog-validate')
  .description('Validate a JSON Blog file against the schema')
  .argument('<file>', 'JSON Blog file to validate')
  .action(async (file: string) => {
    try {
      const content = await fs.readFile(file, 'utf-8');
      const blog = JSON.parse(content);
      const result = await validateBlog(blog);
      
      if (result.success) {
        console.log('✅ Blog file is valid');
        process.exit(0);
      } else {
        console.error('❌ Blog file is invalid:');
        console.error(result.error);
        process.exit(1);
      }
    } catch (error) {
      console.error('Error reading or parsing file:', error);
      process.exit(1);
    }
  });

program.parse();
