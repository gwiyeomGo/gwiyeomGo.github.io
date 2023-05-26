"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[6508],{5806:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return s}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"배경"),"\n",l.createElement(t.p,null,"현재 업무에서 나도모르는 사이에 promise를 쓰고 있었다.\nAPI를 통해 데이터를 받은 후에 대한 결과를 받기 위해서 사용했다."),"\n",l.createElement(t.h1,null,l.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")),"\n",l.createElement(t.p,null,"The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value\nPromise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다"),"\n",l.createElement(t.h1,null,"Promise 생성자 함수는 비동기 작업을 수행할 콜백 함수를 인자로 전달"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"const test = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('Success');\n  }, 1000);\n});\n")),"\n",l.createElement(t.h3,null,"Promise 상태"),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"상태"),l.createElement(t.th,null,"의미"),l.createElement(t.th,null,"구현"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"pending"),l.createElement(t.td,null,"비동기 처리가 아직 수행되지 않은 상태"),l.createElement(t.td,null,"resolve 또는 reject 함수가 아직 호출되지 않은 상태")),l.createElement(t.tr,null,l.createElement(t.td,null,"fulfilled"),l.createElement(t.td,null,"비동기 처리가 수행된 상태 (성공)"),l.createElement(t.td,null,"resolve 함수가 호출된 상태")),l.createElement(t.tr,null,l.createElement(t.td,null,"rejected"),l.createElement(t.td,null,"비동기 처리가 수행된 상태 (실패)"),l.createElement(t.td,null,"reject 함수가 호출된 상태")),l.createElement(t.tr,null,l.createElement(t.td,null,"settled"),l.createElement(t.td,null,"비동기 처리가 수행된 상태 (성공 또는 실패)"),l.createElement(t.td,null,"resolve 또는 reject 함수가 호출된 상태")))),"\n",l.createElement(t.h1,null,"Promise 4가지 정적 메소드"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"1. 성공: `new Promise((resolve,reject) => { resolve('Success') })`\n\nex) `Promise.resolve(123).then((value)=>{console.lgo(value}) //123`\n\n2. 실패: `new Promise((resolve,reject) => { reject(new Error()) })`\n\nex) `Promise.reject()`\n\n\n프라미스를 사용하면 비교적 안전하고 관리하기 쉬운 코드를 작성할 수 있습니다.\n프라미스는 콜백을 예측 가능한 패턴으로 사용할 수 있게 하며,프라미스 없이 콜백만 사용했을 때 나타날 수 있는 엉뚱한 현상이나 찾기 힘든 버그를 상당수 해결합니다.\n\n프라미스는 성공 또는 실패 둘 중 하나만 발생\n프라미스는 객체=> 전달 가능\n프라미스는 비동기 코드를 단순화하고 콜백이 두 번 이상 실행되는 문제를 방지\n단 resolve,reject를 꼭 호출해야됨\n프로미스가 결정되지 않은 문제를 자동으로 해결하지는 못함\n\nnew Promise(); // 대기 상태\n\nnew Promise((resoleve,reject)=>{\n\tresolve(); \n\t//성공 상태\n\treject(); \n\t//실패 상태\n})\n\n")),"\n",l.createElement(t.h3,null,"참고"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve"},"Promise.resolve()"),"\n",l.createElement(t.a,{href:"https://learnjs.vlpt.us/async/02-async-await.html"},"https://learnjs.vlpt.us/async/02-async-await.html"),"\n",l.createElement(t.a,{href:"https://han41858.tistory.com/11"},"https://han41858.tistory.com/11"),"\n",l.createElement(t.a,{href:"https://programmingsummaries.tistory.com/325"},"https://programmingsummaries.tistory.com/325"),"\n",l.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(8804);function s(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2021-10-01-javascript-promise-mdx-44f0378b054a605d76e6.js.map