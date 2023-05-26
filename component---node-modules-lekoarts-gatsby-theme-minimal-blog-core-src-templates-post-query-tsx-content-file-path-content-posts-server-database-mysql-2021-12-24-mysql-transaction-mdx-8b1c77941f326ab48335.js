"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[6781],{469:function(e,n,l){l.r(n),l.d(n,{Head:function(){return u.F},default:function(){return m}});var t=l(7294),c=l(1151);function r(e){const n=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},(0,c.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h3,null,"배경"),"\n",t.createElement(n.p,null,"지금 회사에서는 mysql 을 사용한다.\n개발하는 과정에서 다같이 사용하고 있는 데이터를 수정해야 할 때\n잘못된 데이터로 변경한다면 이전 데이터로 되돌릴 수 없다."),"\n",t.createElement(n.p,null,"그래서 트랜잭션 도구를 사용해서 이전으로 되돌릴 수 있다."),"\n",t.createElement(n.h3,null,"트랜잭션 도구"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-sql"},"START TRANSACTION;\n\n-- COMMIT, ROLLBACK이 나올 때까지 실행되는 모든 SQL 추적\n\nCOMMIT;\n\n-- 모든 코드를 실행(문제가 없을 경우에)\n\nROLLBACK;\n\n-- START TRANSACTION 실행 전 상태로 되돌림(문제 생기면)\n")),"\n",t.createElement(n.h3,null,"어떻게 사용하지?"),"\n",t.createElement(n.p,null,"먼저 데이터를 변경하는 이슈가 생긴다면\nsql 를 만들고 바로 실행시키는 것이 아닌"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"START TRANSACTION")," 을 입력한다."),"\n",t.createElement(n.p,null,"그후 작성한 sql 을 실행시키고\n제대로 데이터를 변경했는지 검색한다 (select)"),"\n",t.createElement(n.p,null,"확인했을때 제대로 변경되었다면 ",t.createElement(n.code,null,"COMMIT")," 을 하고 작업을 마치고"),"\n",t.createElement(n.p,null,"만약 다시 이전으로 되돌려야 한다면 ",t.createElement(n.code,null,"START TRANSACTION")," 을 실행한다."))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?t.createElement(n,e,t.createElement(r,e)):r(e)},u=l(8804);function m(e){return t.createElement(u.Z,e,t.createElement(a,e))}u.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2021-12-24-mysql-transaction-mdx-8b1c77941f326ab48335.js.map