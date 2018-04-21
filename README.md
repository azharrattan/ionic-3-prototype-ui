# Sample UI Prototype using Ionic 3

This is a sample UI prototype of a mobile app / web using Ionic 3, based on Ionic Super Starter kit

## Getting Started

To test this, ensure your already installes the latest Ioni 3, clone the repo, and run:

```bash
npm install
ionic serve
```

## Pages

There are several pages type demonstrating different kind of UI layout which can be extend further (ex: tabs, menu, etc)

## Providers

This also comes with some basic implementations of common providers.

## i18n

This comes with a sample internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file. 

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify
`translate.use('en')` to use the LANGCODE from `src/assets/i18n/`
