# Tinypnga

Optimize your images with Tinypng API. Return Promise!

[![NPM](https://nodei.co/npm/tinypnga.png)](https://nodei.co/npm/tinypnga/)

## Usage

```
const tinypnga=require('tinypnga')

tinypnga.tinypnga(token,urlarray)
.then((res)=>{
    //res = [yourimagebuffer1,yourimagebuffer2,...]
})
```

## Input

### token

Type: `String`

Your tinypng api token

### urlarray

Type: `Array [String1, String2,...]`

A array contain your images' urls

## Return

Promise!

Type: 'Array [Buffer1, Buffer2,...]'