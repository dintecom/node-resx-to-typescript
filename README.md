# @dintecom/resx-to-typescript

Node module for generating TypeScript (models) or JSON files based on resx files.

Each resx file becomes a file with the kebab-cased name of the resx file. Keys keep their names with the first letter lowercased; values are kept as they are.

## Installation

```bash
npm install @dintecom/resx-to-typescript
```

## Usage for TypeScript

```js
import { resxToTypeScript } from "@dintecom/resx-to-typescript";

resxToTypeScript({
  resxFolder: "./Source/Resources",
  outputFolder: "./target/resources",
});
```

`Resource.resx` becomes `resource.ts` with the `Resource` class.

### Options

| Name                     | Type                          | Default | Description                                                                  |
| ------------------------ | ----------------------------- | ------- | ---------------------------------------------------------------------------- |
| resxFolder               | string                        | -       | Folder to scan for .resx files, recursively                                  |
| outputFolder             | string                        | -       | Output directory for TypeScript files                                        |
| typeScriptFolder         | string                        | -       | Deprecated: use `outputFolder` instead                                       |
| indentSize               | number                        | 2       | A whole number defining the number of spaces used for each indentation level |
| indentStyle              | 'space' \| 'tab'              | 'space' | Set to tab or space to use hard tabs or soft tabs respectively               |
| resxEmpty                | 'export' \| 'skip' \| 'throw' | 'skip'  | Defines how to process resx files that do not contain any keys               |
| typeScriptNamespace      | string                        | -       | TypeScript namespace for the resource models                                 |
| typeScriptAccessModifier | 'public' \| 'protected'       | -       | Access modifiers change the visibility of the properties of a class          |
| typeScriptPropertyType   | boolean                       | false   | Enables explicit definition of property types                                |

## Usage for JSON

```js
import { resxToJson } from "@dintecom/resx-to-typescript";

resxToJson({
  resxFolder: "./Source/Resources",
  outputFolder: "./target/resources",
});
```

`Resource.resx` becomes `resource.json` with a flat object of strings.

### Options

| Name         | Type                          | Default | Description                                                                  |
| ------------ | ----------------------------- | ------- | ---------------------------------------------------------------------------- |
| resxFolder   | string                        | -       | Folder to scan for .resx files, recursively                                  |
| outputFolder | string                        | -       | Output directory for JSON files                                              |
| indentSize   | number                        | 2       | A whole number defining the number of spaces used for each indentation level |
| indentStyle  | 'space' \| 'tab'              | 'space' | Set to tab or space to use hard tabs or soft tabs respectively               |
| resxEmpty    | 'export' \| 'skip' \| 'throw' | 'skip'  | Defines how to process resx files that do not contain any keys               |
