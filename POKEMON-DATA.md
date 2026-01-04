# Pokemon Data Combined JSON

This file contains all Pokemon data from the Pokemon-shiny project combined into a single comprehensive JSON file.

## File: `pokemon-data.json`

### Generation

To regenerate this file, run:
```bash
node tasks/combine-data.js
```

### Data Structure

The JSON file is an array of Pokemon objects, sorted by Pokedex number. Each object contains:

```json
{
  "dex": 1,                    // Pokedex number
  "names": {                   // Pokemon names in different languages
    "ko": "이상해씨",           // Korean
    "zh": "妙蛙種子",          // Chinese (Traditional)
    "fr": "Bulbizarre",        // French
    "de": "Bisasam",           // German
    "es": "Bulbasaur",         // Spanish
    "it": "Bulbasaur",         // Italian
    "en": "Bulbasaur",         // English
    "ja": "フシギダネ"         // Japanese
  },
  "variants": [                // Array of all variants/forms for this Pokemon
    {
      "dex": 1,
      "family": "Bulbasaur",
      "released_date": "2018/03/25",
      "shiny_released": true,   // Optional: whether shiny is released
      "fn": "pm0001_00_pgo_fall2019",  // Optional: file name reference
      "isotope": "_f19",        // Optional: variant identifier
      "aa_fn": "...",           // Optional: alternative asset file name
      "name_suffix": "...",     // Optional: suffix for variant name
      "cachebuster": "...",     // Optional: cache busting parameter
      "order": 0,               // Optional: order in list
      "style": "...",           // Optional: styling information
      "type": "..."             // Optional: type information
    }
  ]
}
```

### Data Sources

This combined file merges data from:
- `assets/pms.json` - Pokemon variant data with release dates and shiny status (1,465 entries)
- `assets/name.src.json` - Pokemon names in 8 languages (1,010 Pokemon)

### Statistics

- **Total unique Pokemon**: 942 (by unique dex numbers with variants)
- **Total variants**: 1,465 (including forms, costumes, and special releases)
- **Pokemon with names**: 1,010 (complete Pokedex up to Gen 9)
- **Languages supported**: 8 (Korean, Chinese, French, German, Spanish, Italian, English, Japanese)

### Variant Types

Variants include:
- Base forms
- Shiny forms (`shiny_released: true`)
- Costume variants (identified by `isotope` field like `_f19`, `_11`, `_14`)
- Special event forms (indicated by `fn` field)
- Regional forms or special releases

### Use Cases

This combined JSON can be used for:
- Pokemon tracking applications
- Shiny hunting trackers
- Multilingual Pokemon databases
- Pokemon GO release date tracking
- Variant/form completionist tools
