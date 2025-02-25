#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const promises_1 = __importDefault(require("fs/promises"));
const index_1 = require("../index");
const program = new commander_1.Command();
program
    .name('jsonblog-validate')
    .description('Validate a JSON Blog file against the schema')
    .argument('<file>', 'JSON Blog file to validate')
    .action(async (file) => {
    try {
        const content = await promises_1.default.readFile(file, 'utf-8');
        const blog = JSON.parse(content);
        const result = await (0, index_1.validateBlog)(blog);
        if (result.success) {
            console.log('✅ Blog file is valid');
            process.exit(0);
        }
        else {
            console.error('❌ Blog file is invalid:');
            console.error(result.error);
            process.exit(1);
        }
    }
    catch (error) {
        console.error('Error reading or parsing file:', error);
        process.exit(1);
    }
});
program.parse();
