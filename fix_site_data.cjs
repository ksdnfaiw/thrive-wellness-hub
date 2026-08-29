const fs = require('fs');
const file_path = 'c:/Users/Attentive/Downloads/thrive/thrive-wellness-hub/src/lib/site-data.ts';
let content = fs.readFileSync(file_path, 'utf8');

// Update wellness therapies highlights
const old_highlights = `highlights: [
      "Ozonation: controlled, medically guided ozone-based approaches where appropriate",
      "Hydration: therapies that support the body's hydration and recovery needs",
      "Blood circulation: support for healthy circulation and overall physiological wellbeing",
    ]`;
const new_highlights = `highlights: [
      "Infra red light therapy",
      "Hyperbaric oxygen (HBOT)",
      "Molecular hydrogen infusion",
      "Ozone therapy",
      "EBOO",
      "COLD PLUNGE",
      "IV DRIPS",
    ]`;
content = content.replace(old_highlights, new_highlights);

// Update duplicate doctor (Dr. Anahita Reddy)
// Add image to the correct profile
const old_doc_start = `  {
    name: "Dr. Anahita Reddy",
    qualifications:`;
const new_doc_start = `  {
    name: "Dr. Anahita Reddy",
    image: "https://res.cloudinary.com/dizaawlyl/image/upload/v1787908386/DSC03383_qfnqhd.jpg",
    qualifications:`;
content = content.replace(old_doc_start, new_doc_start);

// Remove the duplicate
const duplicate_doc_regex = /\s*\{\s*name: "Dr M Anahita Reddy",[\s\S]*?\},/;
content = content.replace(duplicate_doc_regex, '');

// Reorder services
const start_idx = content.indexOf('export const services: Service[] = [');
const end_idx = content.indexOf('export const approach = [', start_idx);
const services_block = content.substring(start_idx, end_idx);

const parts = services_block.split('  {\n    slug: ');
const prefix = parts[0];
const service_objects = parts.slice(1).map(p => '  {\n    slug: ' + p);

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
