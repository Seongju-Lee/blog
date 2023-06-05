---
id: '1',
image: 'https://s3.ap-northeast-2.amazonaws.com/sungkyu.info/keypoint-sample2+(1).jpg'
category: '개발'
tag: 'React'
title: 'Two Forms of Pre-rendering'
date: '2020년 01월 01일'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

```js
console.log('test');
```

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.