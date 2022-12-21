"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2785],{2175:function(A,e,t){t.r(e),t.d(e,{Head:function(){return r.F},default:function(){return g}});var n=t(7294),a=t(1151);function l(A){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",div:"div",ul:"ul",li:"li",a:"a"},(0,a.ah)(),A.components);return n.createElement(n.Fragment,null,n.createElement(e.h1,null,"배경"),"\n",n.createElement(e.p,null,"golang 의 grom 을 사용해서 데이터 생성 날짜를 현재 시간으로 자동으로 insert 했다.\r\ngolang 코드에서 는  ",n.createElement(e.code,null,"time.Time")," 을 사용해서 db 에 insert 한다"),"\n",n.createElement(e.pre,null,n.createElement(e.code,null,'type testEntity struct {\r\n\tID        string `gorm:"primarykey;type:varchar(10)"`\r\n\t...\r\n\tCreatedAt time.Time\r\n\tUpdatedAt time.Time\r\n}\n')),"\n",n.createElement(e.h1,null,"문제"),"\n",n.createElement(e.p,null,n.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 463px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 27.500000000000004%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdqQsD//xAAVEAEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAQABBQKIj//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABYQAQEBAAAAAAAAAAAAAAAAAAARYf/aAAgBAQABPyGlp1//2gAMAwEAAgADAAAAEPgP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAQACAwAAAAAAAAAAAAAAAREAIUFhcf/aAAgBAQABPxC0jvtxRAgc7cJba9z/2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="img"\n        title="img"\n        src="/static/f660d5c2191d200e8af565676d75e3c8/6c10a/datetime.jpg"\n        srcset="/static/f660d5c2191d200e8af565676d75e3c8/46946/datetime.jpg 240w,\n/static/f660d5c2191d200e8af565676d75e3c8/6c10a/datetime.jpg 463w"\n        sizes="(max-width: 463px) 100vw, 463px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\r\n",n.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 235px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 57.02127659574467%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUE/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB05LYirQ//8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAhMSFP/aAAgBAQABBQJ7GRO7j0OOK2MlmSz/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAACAgMBAAAAAAAAAAAAAAAAAREyAhIhof/aAAgBAQAGPwJ6uEXRfwc4p9KIoj//xAAdEAABAwUBAAAAAAAAAAAAAAAAAREhUWFxkfGh/9oACAEBAAE/IYX5Wkp+RZaD7KCHJOSf/9oADAMBAAIAAwAAABDwz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB4QAAEEAgMBAAAAAAAAAAAAAAEAESExQWEQUXHw/9oACAEBAAE/EDcO0RfYfCjkjDAjXiAb+DScMgNiJwxj14h//9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="img2"\n        title="img2"\n        src="/static/13131f3595036c831a030eb76250b2df/9e042/datetime2.jpg"\n        srcset="/static/13131f3595036c831a030eb76250b2df/9e042/datetime2.jpg 235w"\n        sizes="(max-width: 235px) 100vw, 235px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\r\n추가된 데이터가가 분,초는 일치하지만 시간만 9시간이 차이가 난다"),"\n",n.createElement(e.h1,null,"찾아보니.."),"\n",n.createElement(e.p,null,"타임존에 대해서 찾아봤다"),"\n",n.createElement(e.p,null,"내가 사용했던 ",n.createElement(e.code,null,"time.Time")," 은  UTC 시간 문자열 로 들어감\r\n코드를 수정시  KST 기준의 Time으로 변경해서 수정해야 한다"),"\n",n.createElement(e.h1,null,"알아보기"),"\n",n.createElement(e.ul,null,"\n",n.createElement(e.li,null,"utc?"),"\n",n.createElement(e.li,null,"kst?"),"\n"),"\n",n.createElement(e.h1,null,"참고"),"\n",n.createElement(e.p,null,n.createElement(e.a,{href:"https://jeonghwan-kim.github.io/dev/2019/01/14/go-time.html"},"Go time 패키지")))}var i=function(A){void 0===A&&(A={});const{wrapper:e}=Object.assign({},(0,a.ah)(),A.components);return e?n.createElement(e,A,n.createElement(l,A)):l(A)},r=t(8804);function g(A){return n.createElement(r.Z,A,n.createElement(i,A))}r.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-database-mysql-2022-08-29-mysql-datetime-9-hours-difference-mdx-728ec4d1772c8ece72e0.js.map