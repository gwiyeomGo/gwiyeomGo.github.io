"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5652],{5990:function(e,n,t){t.r(n),t.d(n,{Head:function(){return m.F},default:function(){return a}});var l=t(7294),r=t(1151);function c(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"어드민 멤버 역할 테이블"),"은 매번 삭제된다.\n이력이 정말 필요한 것인지 논란은 있었으나\n기록을 남기기로 결정했다.\n",l.createElement(n.code,null,"revisons")," table 을 추가하는 작업을 진행하면서\n이전에 ",l.createElement(n.code,null,"어드민 멤버 역할 테이블")," 데이터를\n",l.createElement(n.code,null,"revisons")," 에 마이그레이션 하려고 시도했다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"insert into revisions\n(created_at,deleted_at,member_entity_id,role_entity_id)\nSELECT now(),null,member_entity_id,role_entity_id\nFROM member_roles;\n")),"\n",l.createElement(n.p,null,"그런데 ",l.createElement(n.code,null,"create_at"),"컬럼의 시간이 현재시간보다 9시간 이전 시간으로 보였다.\n왜?"),"\n",l.createElement(n.h1,null,"mysql 의 time_zone"),"\n",l.createElement(n.p,null,"mysql shell 에서 ",l.createElement(n.code,null,"select @@global.time_zone, @@session.time_zone,@@system_time_zone;"),"\n입력하면 ",l.createElement(n.code,null,"SYSTEM"),",",l.createElement(n.code,null,"SYSTEM"),",",l.createElement(n.code,null,"UTC"),"로 되어있다."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"select now()")," 쿼리를 실행하는 나는 한국에 위치해 있는데  ",l.createElement(n.code,null,"system_time_zone "),"이 UTC 여서\n9시간 느리게 나온다."),"\n",l.createElement(n.h1,null,"해결"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"set global time_zone = 'Asia/Seoul';\nset time_zone = 'Asia/Seoul';\n")),"\n",l.createElement(n.p,null,"다음 명령어를 실행해 ",l.createElement(n.code,null,"SYSTEM")," 값을 ",l.createElement(n.code,null,"Asia/Seoul")," 로 바꿔준다.\n",l.createElement(n.code,null,"Error Code: 1298. Unknown or incorrect time zone: 'Asia/Seoul'\t0.000 sec")," 에러가 발생해서 적용되지 않는다면"),"\n",l.createElement(n.p,null,"급하면"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"SET GLOBAL time_zone='+09:00';\nSET time_zone='+09:00';\n")),"\n",l.createElement(n.p,null,"처럼 숫자를 넣으면 한국 시간으로 추가된다.\n하지만.. 나중에는 'Asia/Seoul' 을 설정하는 방법도 찾아 정리하자..."),"\n",l.createElement(n.h1,null,"참고"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://luran.me/367"},"https://luran.me/367"),"\n",l.createElement(n.a,{href:"https://maliethy.github.io/posts/mysql_timezone/"},"https://maliethy.github.io/posts/mysql_timezone/"),"\n",l.createElement(n.a,{href:"https://jwkim96.tistory.com/23"},"https://jwkim96.tistory.com/23"),"\n",l.createElement(n.a,{href:"https://velog.io/@taelee/mysql%EC%97%90%EC%84%9C-9%EC%8B%9C%EA%B0%84-%EC%B0%A8%EC%9D%B4%EB%82%A0%EB%95%8CGCP"},"https://velog.io/@taelee/mysql%EC%97%90%EC%84%9C-9%EC%8B%9C%EA%B0%84-%EC%B0%A8%EC%9D%B4%EB%82%A0%EB%95%8CGCP")))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},m=t(8804);function a(e){return l.createElement(m.Z,e,l.createElement(o,e))}m.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2023-02-16-mysql-time-zone-mdx-0a61d4eb3242bd2168dd.js.map