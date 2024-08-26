# 사용법

`git clone https://github.com/Jamkris/React_Ts_Setting.git client`

`cd client`

`yarn install`

`yarn start`

# 풀더 구조

client
 ┣ public
 ┃ ┗ index.html
 ┣ src
 ┃ ┣ assets
 ┃ ┃ ┣ font
 ┃ ┃ ┣ icon
 ┃ ┃ ┗ image
 ┃ ┣ components
 ┃ ┣ config
 ┃ ┣ data
 ┃ ┣ hooks
 ┃ ┣ lib
 ┃ ┃ ┣ api
 ┃ ┃ ┗ utils
 ┃ ┃ ┃ ┗ style
 ┃ ┣ pages
 ┃ ┃ ┗ Main
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┗ style.ts
 ┃ ┣ router
 ┃ ┃ ┗ index.tsx
 ┃ ┣ types
 ┃ ┣ App.tsx
 ┃ ┣ index.css
 ┃ ┗ index.tsx
 ┣ .eslintrc
 ┣ .eslintrc.json
 ┣ .gitignore
 ┣ .prettierrc
 ┣ LICENSE
 ┣ LICENSE copy
 ┣ README.md
 ┣ custom.d.ts
 ┣ package.json
 ┣ tsconfig.json
 ┗ yarn.lock

# 의존성 및 세팅
설치되는 의존성 `react-query` `react-router-dom` `styled-components` `TypeScript`

## prettier
```
.prettierrc

{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 80,
  "endOfLine": "auto",
  "arrowParens": "always",
  "jsxSingleQuote": false,
  "bracketSpacing": true
}
```

## Custom.d.ts
```
./custom.d.ts
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

./src/custom.d.ts
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
```
모든 이미지파일 import 가능

## Eslint
```
.eslintrc
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "ignorePatterns": ["node_modules/"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}

./eslintrc.json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "plugins": ["@typescript-eslint", "react"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
}
```
입맛에 맛게 조정이 필요함 꽤 깐깐한 eslint 설정

## tsconfig
```
./tsconfig.json
{
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "typeRoots": ["./node_modules/@types"],
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "src"
  },
  "include": ["src", "src/custom.d.ts"]
}
```
baseUrl = src

