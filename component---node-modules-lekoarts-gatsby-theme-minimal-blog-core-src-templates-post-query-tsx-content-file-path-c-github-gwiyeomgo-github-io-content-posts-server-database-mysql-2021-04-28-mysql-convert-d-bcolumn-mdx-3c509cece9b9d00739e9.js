"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2576],{6172:function(e,n,r){r.r(n),r.d(n,{Head:function(){return i.F},default:function(){return u}});var l=r(7294),t=r(1151);function s(e){const n=Object.assign({h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code",p:"p",h1:"h1",a:"a"},(0,t.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"처음 개발을 시작할때 새로운 기능을 만들때 table을 새로 만들었다,"),"\n",l.createElement(n.li,null,"시스템에 기능이 추가되면서 사업지역의 사용이 늘어났음"),"\n"),"\n",l.createElement(n.h3,null,"문제"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"사업지역명의 데이터를 한글로 받음"),"\n",l.createElement(n.li,null,"같은 사업지역명 데이터를 sharings 와 companies 테이블에서 다른 컬럼명으로 사용하고 있다.","\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"sharings 는 business_area로 지역데이터를 보관"),"\n",l.createElement(n.li,null,"companies 는 business_region로 지역 데이터를 보관"),"\n"),"\n"),"\n"),"\n",l.createElement(n.h3,null,"1 business_region table생성"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"\r\nCREATE TABLE IF NOT EXISTS `business_region` (\r\n\r\n `id` INT NOT NULL AUTO_INCREMENT,\r\n\r\n `type` VARCHAR(50) NOT NULL COMMENT '기관 id',\r\n\r\n `key` VARCHAR(50) NOT NULL COMMENT '지역 key',\r\n\r\n `value` VARCHAR(50) NOT NULL COMMENT '지역명',\r\n\r\n PRIMARY KEY (`id`),\r\n\r\n KEY `idx_compaies_business_region_key` (`key`)\r\n\r\n);\r\n\n")),"\n",l.createElement(n.h3,null,"2 sharings 와 companies 테이블에서 사업지역명 통일"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"sharings 는 business_area로 지역데이터를 보관"),"\n",l.createElement(n.li,null,"companies 는 business_region로 지역 데이터를 보관"),"\n"),"\n",l.createElement(n.p,null,"이슈 sharings 의 컬럼을 business_area로 변경하고 사용하는 데이터를 찾아 변경"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"ALTER TABLE sharings RENAME COLUMN business_area TO business_region;\n")),"\n",l.createElement(n.p,null,"신청 내역에서 사용되는 부분을 변경"),"\n",l.createElement(n.h1,null,"3 business_region 테이블에서 사업지역명 key값 정의"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"A01 전국\r\nA02 서울특별시\r\nA03 부산광역시\r\nA04 인천광역시\r\nA05 대구광역시\r\nA06 광주광역시\r\nA07 대전광역시\n")),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'insert into (`type`,`key`,`value`)\r\nvalues\r\n("area","A01" ,"전국"),\r\n("area","A02" ,"서울특별시"),\r\n("area","A03" ,"부산광역시"),\r\n("area","A04" ,"인천광역시"),\r\n("area","A05" ,"대구광역시"),\r\n("area","A06" ,"광주광역시"),\r\n("area","A07" ,"대전광역시");\n')),"\n",l.createElement(n.h3,null,"4.기존데이터 변경"),"\n",l.createElement(n.p,null,"sharings 의 business_region 값이 전국인 경우를 찾아서 값을 A01으로 변경한다"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"UPDATE sharings SET business_region = '전국' WHERE business_region = A01;\n")),"\n",l.createElement(n.p,null,"그룹으로",l.createElement(n.a,{href:"https://stackoverflow.com/questions/12754470/mysql-update-case-when-then-else"},"https://stackoverflow.com/questions/12754470/mysql-update-case-when-then-else")),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'\r\nUPDATE sharings SET business_region = CASE\r\n\tWHEN business_region ="전국" THEN "A01"\r\n\tWHEN business_region ="서울특별시" THEN "A02"\r\n\tWHEN business_region ="부산광역시" THEN "A03"\r\n\tWHEN business_region ="인천광역시" THEN "A04"\r\n\tWHEN business_region ="대구광역시" THEN "A05"\r\n\tWHEN business_region ="광주광역시" THEN "A06"\r\n\tWHEN business_region ="대전광역시" THEN "A07"\r\n    END\r\nWHERE business_region  in \r\n("전국" ,"서울특별시" ,"부산광역시" ,"인천광역시" ,"대구광역시" ,"광주광역시" ,"대전광역시" )\r\n\n')),"\n",l.createElement(n.p,null,"companies 의 business_region 값이 서울특별시 인 경우를 찾아서 값을 A01으로 변경한다"))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(s,e)):s(e)},i=r(8804);function u(e){return l.createElement(i.Z,e,l.createElement(a,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-database-mysql-2021-04-28-mysql-convert-d-bcolumn-mdx-3c509cece9b9d00739e9.js.map