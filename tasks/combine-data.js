const fs = require('fs');

const outputJSON = (json = {}, fileName, jsonSpace = 2) => {
  let fileContent = JSON.stringify(json, null, jsonSpace);
  fs.writeFileSync(fileName, fileContent);
  console.log(`JSON saved as ${fileName}! ( ${fileContent.length / 1000} kb )`);
};

// Read the source files
let pms, names;
try {
  pms = fs.readFileSync('./assets/pms.json', 'utf8');
  names = fs.readFileSync('./assets/name.src.json', 'utf8');
} catch (error) {
  console.error('Error reading source files:', error.message);
  process.exit(1);
}

try {
  pms = JSON.parse(pms);
  names = JSON.parse(names);
} catch (error) {
  console.error('Error parsing JSON:', error.message);
  process.exit(1);
}

// Create a comprehensive data structure
// Group pms entries by dex number and combine with names
const combinedData = {};

// Process pms.json entries
pms.forEach((entry) => {
  const dexId = entry.dex.toString();
  
  // Initialize dex entry if it doesn't exist
  if (!combinedData[dexId]) {
    combinedData[dexId] = {
      dex: entry.dex,
      names: names[dexId] || {},
      variants: []
    };
  }
  
  // Add this entry as a variant
  combinedData[dexId].variants.push(entry);
});

// Convert to array format sorted by dex number
const outputArray = Object.keys(combinedData)
  .sort((a, b) => parseInt(a) - parseInt(b))
  .map(dexId => combinedData[dexId]);

// Save the combined data
outputJSON(outputArray, './pokemon-data.json');

console.log('\nSummary:');
console.log(`Total unique Pokemon (by dex): ${outputArray.length}`);
console.log(`Total variants: ${pms.length}`);
console.log(`Pokemon with names: ${Object.keys(names).length}`);
