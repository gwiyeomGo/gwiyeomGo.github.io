"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4733],{5802:function(e,n,a){a.r(n),a.d(n,{Head:function(){return m.F},default:function(){return s}});var r=a(7294),t=a(1151);function l(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",a:"a"},(0,t.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,null,"배경"),"\n",r.createElement(n.p,null,"1.어드민에서 화면에 목록을 다운받고 싶은 요구 발생"),"\n",r.createElement(n.h1,null,"작업내용"),"\n",r.createElement(n.p,null,"파일 다운로드"),"\n",r.createElement(n.h1,null,"방법1"),"\n",r.createElement(n.p,null,"현재 저의 코드에서는 react-csv 컴포넌트를 import 받아서 사용합니다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,'import { CSVLink } from "react-csv";\r\n\r\nheaders = [\r\n  { label: "First Name", key: "firstname" },\r\n  { label: "Last Name", key: "lastname" },\r\n  { label: "Email", key: "email" }\r\n];\r\n\r\ndata = [\r\n  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },\r\n  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },\r\n  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }\r\n];\r\n\r\n<CSVLink\r\n  data={data}\r\n  filename={"my-file.csv"}\r\n  headers={headers}\r\n>\r\n  Download me\r\n</CSVLink>;\n')),"\n",r.createElement(n.p,null,"출처 : ",r.createElement(n.a,{href:"https://www.npmjs.com/package/react-csv"},"https://www.npmjs.com/package/react-csv")),"\n",r.createElement(n.p,null,"1.CSVLink 를 사용해서 [] 형태 데이터를 그대로 다운 받을 수 있었다.\r\n2. 그런데 기획쪽의 요청은 한글 name을 추가를 요청했다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"//2개 [] 을 [{},{}]로 변환\r\nexport const makeCsvHeaders = (headerValues,dataKeys) => {\r\n  let fileHeader = new Array(dataKeys.length)\r\n  dataKeys.length > 0 && dataKeys.forEach((key,index) =>\r\n      fileHeader[index] ={\r\n        key:key,\r\n        label: headerValues[index]\r\n      });\r\n  return fileHeader\r\n}\n")),"\n",r.createElement(n.p,null,"makeCsvHeaders"),"\n",r.createElement(n.h1,null,"내가 추가한 작업"),"\n",r.createElement(n.h1,null,"방법2"),"\n",r.createElement(n.p,null,"1.프론트에서 버튼 클릭\r\n2.backend에서 버튼 다운로드"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?r.createElement(n,e,r.createElement(l,e)):l(e)},m=a(8804);function s(e){return r.createElement(m.Z,e,r.createElement(c,e))}m.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-react-2022-04-15-react-file-download-mdx-9b5fcea927cde142ea57.js.map