"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3818],{1103:function(e,n,t){t.r(n),t.d(n,{Head:function(){return i.F},default:function(){return c}});var l=t(7294),o=t(1151);function a(e){const n=Object.assign({p:"p",ol:"ol",li:"li",pre:"pre",code:"code",a:"a",h3:"h3",h1:"h1"},(0,o.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"gitbook 설치"),"\n",l.createElement(n.p,null,"1.버전 확인"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"node.js 설치\n1.gitbook init 하다가 아래와 같은 에러 발생하면"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},'\t$ gitbook init\n\twarn: no summary file in this book\n\tinfo: create SUMMARY/\n\t\n\tTypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Promise\n\n')),"\n",l.createElement(n.p,null,"node 버전을 바꿔야 한다.\t(이때 nvm을 사용해서 변환해주면 쉽게 변경할 수 있다)\n",l.createElement(n.code,null,"Switch back from latest node version to 12.18.1 LTS.")),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://stackoom.com/en/question/4AD2n"},"참조0"),"\n",l.createElement(n.a,{href:"https://ahn3330.tistory.com/45"},"nvm 설치")),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"gitbook ",l.createElement(n.code,null,"npm install gitbook-cli -g")," 설치"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement(n.code,null,"TypeError: Cannot read property 'pipesCount' of undefined"),"에러를 만나면\n",l.createElement(n.code,null,"npm install gitbook-cli@2.1.2 --global"),"로 다시 설치\n",l.createElement(n.a,{href:"https://github.com/GitbookIO/gitbook-cli/issues/113"},"참조1")),"\n"),"\n"),"\n",l.createElement(n.p,null,"2.",l.createElement(n.code,null,"TypeError: cb.apply is not a function"),"과 같은 에러 발생한다면\n",l.createElement(n.code,null,"npm root -g"),"로 node_modules 위치를 찾고 이동( your global npm installation path)"),"\n",l.createElement(n.p,null,"그후 다시 ",l.createElement(n.code,null,"cd gitbook-cli/node_modules/npm/node_modules/")," 이동\n이동 후 graceful-fs 를 최신버전으로 설치"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"npm install graceful-fs@latest --save"),"설치해도 에러난다면 ",l.createElement(n.code,null," graceful-fs@4.2.0")," 설치"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/64211386/gitbook-cli-install-error-typeerror-cb-apply-is-not-a-function-inside-graceful"},"참조2"),"\n",l.createElement(n.a,{href:"https://jojoldu.tistory.com/598"},"참조2-1")),"\n",l.createElement(n.h3,null,"0.gitbook 파일 생성 후 github repository 생성하기"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"cd c:/gitBooks\ngitbook init blog(=생성할 gitbook folder name )\ncd blog\n")),"\n",l.createElement(n.h3,null,"1.최소 설정"),"\n",l.createElement(n.p,null,"git init"),"\n",l.createElement(n.h1,null,"2.master로 체크아웃해서 필요한 코드 추가"),"\n",l.createElement(n.h1,null,"master branch에 publish file 추가하기"),"\n",l.createElement(n.h1,null,"README/ , SUMMARY/"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},'\ngit add .\ngit commit -m "first commit"\ngit branch -M master\n\n\ngit remote add origin https://{github id}:{인증키}/{github id}/developmentRecords.git\n\ngit push -u origin master\n\ngit checkout -b gh-pages\n\ngit checkout master\n')),"\n",l.createElement(n.h3,null,"3.gh-pages branch를 git repository에 추가한다."),"\n",l.createElement(n.h3,null,"4 publish 파일 실행"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://beomi.github.io/2017/11/20/Deploy-Gitbook-to-Github-Pages/"},"publish 파일 출처"),"\n",l.createElement(n.a,{href:"https:/.psangwoo.com/coding/2018/01/31/gitbook-on-windows.html"},"위 출처에서 말하는 docs로 gitbook 만드는 방법")),"\n",l.createElement(n.p,null,"아래 파일은 gh-pages로 gitbook 만드는 shell 명령이다.\n해당파일을 매번 master에서 실행시켜 변경된 내용이 gh-pages에 업데이트 할 수 있다"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},'# gitbook 의존 파일을 설치하고 gitbook 빌드를 돌린다.\ngitbook install && gitbook build\n\n# github pages가 바라보는 gh-pages 브랜치를 만든다.\ngit checkout gh-pages\n\n# 최신 gh-pages 브랜치 정보를 가져와 rebase를 진행한다.\ngit pull origin gh-pages --rebase\n\n# gitbook build로 생긴 _book폴더 아래 모든 정보를 현재 위치로 가져온다.\ncp -R _book/* .\n\n# node_modules폴더와 _book폴더를 지워준다.\ngit clean -fx node_modules\ngit clean -fx _book\n\n# NOQA\ngit add .\n\n# 커밋커밋!\ngit commit -a -m "Update docs"\n\n# gh-pages 브랜치에 PUSH!\ngit push origin gh-pages\n\n# 다시 master 브랜치로 돌아온다.\ngit checkout master\n\n\n')),"\n",l.createElement(n.h3,null,"20220324"),"\n",l.createElement(n.p,null,"sitemap 추가\n",l.createElement(n.a,{href:"https://www.npmjs.com/package/gitbook-plugin-sitemap-general"},"https://www.npmjs.com/package/gitbook-plugin-sitemap-general")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"npm i gitbook-plugin-sitemap-general")),"\n",l.createElement(n.h3,null,"20220325"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://simonjisu.github.io/programming/2018/12/04/buildgithubpages.html"},"https://simonjisu.github.io/programming/2018/12/04/buildgithubpages.html"),"\n포스팅 덕분에.. docs로 편하게 배포할 수 있게 되었다.\n폴더 관리 주의"))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},i=t(8804);function c(e){return l.createElement(i.Z,e,l.createElement(r,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-git-2021-12-31-git-create-git-book-mdx-f3cff08674f1d4c0144e.js.map