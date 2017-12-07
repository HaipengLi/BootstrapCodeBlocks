1. npm install --save-dev node-sass

2. Next open your package.json file and add the following line into the scripts object there. This adds a script to enable the compilation of the Scss file into a CSS file:
```
"scss": "node-sass -o css/ css/"
```

3. In order to transform the Scss file to a CSS file, type the following at the prompt:
```
npm run scss
```
