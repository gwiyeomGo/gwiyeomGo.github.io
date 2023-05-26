"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1561],{6272:function(e,n,a){a.r(n),a.d(n,{Head:function(){return m.F},default:function(){return s}});var t=a(7294),l=a(1151);function r(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",a:"a"},(0,l.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h1,null,"배경"),"\n",t.createElement(n.p,null,"1.어드민에서 화면에 목록을 다운받고 싶은 요구 발생"),"\n",t.createElement(n.h1,null,"작업내용"),"\n",t.createElement(n.p,null,"파일 다운로드"),"\n",t.createElement(n.h1,null,"방법1"),"\n",t.createElement(n.p,null,"현재 저의 코드에서는 react-csv 컴포넌트를 import 받아서 사용합니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,'import { CSVLink } from "react-csv";\n\nheaders = [\n  { label: "First Name", key: "firstname" },\n  { label: "Last Name", key: "lastname" },\n  { label: "Email", key: "email" }\n];\n\ndata = [\n  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },\n  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },\n  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }\n];\n\n<CSVLink\n  data={data}\n  filename={"my-file.csv"}\n  headers={headers}\n>\n  Download me\n</CSVLink>;\n')),"\n",t.createElement(n.p,null,"출처 : ",t.createElement(n.a,{href:"https://www.npmjs.com/package/react-csv"},"https://www.npmjs.com/package/react-csv")),"\n",t.createElement(n.p,null,"1.CSVLink 를 사용해서 [] 형태 데이터를 그대로 다운 받을 수 있었다.\n2. 그런데 기획쪽의 요청은 한글 name을 추가를 요청했다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"//2개 [] 을 [{},{}]로 변환\nexport const makeCsvHeaders = (headerValues,dataKeys) => {\n  let fileHeader = new Array(dataKeys.length)\n  dataKeys.length > 0 && dataKeys.forEach((key,index) =>\n      fileHeader[index] ={\n        key:key,\n        label: headerValues[index]\n      });\n  return fileHeader\n}\n")),"\n",t.createElement(n.p,null,"makeCsvHeaders"),"\n",t.createElement(n.h1,null,"내가 추가한 작업"),"\n",t.createElement(n.h1,null,"방법2"),"\n",t.createElement(n.p,null,"1.프론트에서 버튼 클릭\n2.backend에서 버튼 다운로드"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?t.createElement(n,e,t.createElement(r,e)):r(e)},m=a(8804);function s(e){return t.createElement(m.Z,e,t.createElement(c,e))}m.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-react-2022-04-15-react-file-download-mdx-f1affd055fdb6e0560b3.js.map