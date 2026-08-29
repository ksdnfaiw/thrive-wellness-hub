const fs = require('fs');
const file_path = 'c:/Users/Attentive/Downloads/thrive/thrive-wellness-hub/src/lib/site-data.ts';
let content = fs.readFileSync(file_path, 'utf8');

const start_idx = content.indexOf('export const services: Service[] = [');
const end_idx = content.indexOf('export const approach = [', start_idx);
const services_block = content.substring(start_idx, end_idx);

const parts = services_block.split('  {\n    slug: "');
const prefix = parts[0];
const service_objects = parts.slice(1).map(p => '  {\n    slug: "' + p);

const dict = {};
for (const s of service_objects) {
    const slugMatch = s.match(/slug: "([^"]+)"/);
    if (slugMatch) {
        dict[slugMatch[1]] = s;
    }
}

const order = [
    'interventional-procedures',
    'physiotherapy-and-rehabilitation',
    'wellness-therapies',
    'diagnostics-and-imaging',
    'nutrition',
    'psychology-and-mental-wellness',
    'in-house-pharmacy',
    'polyclinic'
];

let new_services_block = prefix + order.map(o => dict[o]).join('');
content = content.replace(services_block, new_services_block);

fs.writeFileSync(file_path, content);
console.log('Reordered services successfully');
