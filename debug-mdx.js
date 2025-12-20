const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const dir = path.join(process.cwd(), 'content', 'projects');
console.log('Target Directory:', dir);

if (!fs.existsSync(dir)) {
    console.error('Directory does NOT exist!');
} else {
    console.log('Directory exists.');
    const files = fs.readdirSync(dir);
    console.log('Files found:', files);

    const mdxFiles = files.filter(f => path.extname(f) === '.mdx');
    console.log('MDX Files filtered:', mdxFiles);

    mdxFiles.forEach(file => {
        const content = fs.readFileSync(path.join(dir, file), 'utf-8');
        const { data } = matter(content);
        console.log(`\nParsed ${file}:`, data);
    });
}
