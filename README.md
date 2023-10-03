# @dintecom/resx-to-typescript

Node module for generating TypeScript (models) files based on resx files.

## Installation

```bash
npm install @dintecom/resx-to-typescript
```

## Usage

The script requires two parameter, the path to the ResX file and the path to the TypeScript file you want to add.

So, to use the module in for instance a gulp task:

```js
const { resxToTypeScript } = require("resx-to-typescript");

resxToTypeScript({
  resxFolder: "./Source/Resources",
  typeScriptFolder: "./target/resources",
});
```

## Options

| Name                     | Type                          | Default | Description                                                                   |
| ------------------------ | ----------------------------- | ------- | ----------------------------------------------------------------------------- |
| indentSize               | number                        | 2       | A whole number defining the number of columns used for each indentation level |
| indentStyle              | 'space' \| 'tab'              | 'space' | set to tab or space to use hard tabs or soft tabs respectively                |
| resxFolder               | string                        | -       | Folder to scan for .resx files                                                |
| resxEmpty                | 'export' \| 'skip' \| 'throw' | 'skip'  | Defines how to process resx files that do not contain any keys                |
| typeScriptFolder         | string                        | -       | Output directory for TypeScript files                                         |
| typeScriptNamespace      | string                        | null    | TypeScript namespace for the resource models                                  |
| typeScriptAccessModifier | 'public' \| 'protected'       | null    | Access modifiers change the visibility of the properties of a class           |
| typeScriptPropertyType   | boolean                       | false   | Enables explicit definition of property types                                 |
