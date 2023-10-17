"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4074],{2134:function(e,n,l){l.r(n),l.d(n,{Head:function(){return o.F},default:function(){return i}});var t=l(7294),r=l(1151);function a(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3",ol:"ol",li:"li",pre:"pre",ul:"ul",h4:"h4"},(0,r.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h1,null,"배경"),"\n",t.createElement(n.p,null,"github 에서 main 을 pull 받았을 때 충돌이 발생했다\n변화된 내용이 만아 branch 에서 ",t.createElement(n.code,null,"git pull origin main"),"을 하고\n코드를 병합했다. (merge)\n모든 코드를 변경했는데 에러가 끝나지 않았다\n병합을 끝내는 방법은 뭐지?\n또한\n업무에서는 gitLab 을 사용하고 있다.\n그리고 conflict  가 발생하면 rebase 하고 있다\n각각의 차의를 알아보고\ngitLab 과 github 에서 왜 다르게 충돌을 해결하는지 궁금했다"),"\n",t.createElement(n.h2,null,"병합을 끝내려면?"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"With Git 2.12 (Q1 2017), you will have the more natural command:\n",t.createElement(n.a,{href:"https://stackoverflow.com/questions/2474097/how-do-i-finish-the-merge-after-resolving-my-merge-conflicts"},"How do I finish the merge after resolving my merge conflicts")),"\n"),"\n",t.createElement(n.p,null,"글에서는 ",t.createElement(n.code,null,"git merge --continue")," 를 실행하라고 했다 문제를 해결해서\n다시 origin branch 로 push 하고 main 으로 머지했다."),"\n",t.createElement(n.h2,null,"conflict 은 뭐지?"),"\n",t.createElement(n.p,null,"특정 branch 에서 다른 branch 를 pull 받을때"),"\n",t.createElement(n.h3,null,"지금까지 git rebase  는 언제 사용헸지?"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"git rebase -i HEAD~2")),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"직전 커밋 2개를 합쳐준다"),"\n",t.createElement(n.li,null,"충돌 후 해결"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"***tip:\ngit 에서는 pull의 기본 설정이 rebase가 false로 되어있다.\n이 부분에 대해 rebase가 true가 되도록 바꿔주는 설정작업이 필요하다"),"\n"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,'힌트: You have divergent branches and need to specify how to reconcile them.\n힌트: You can do so by running one of the following commands sometime before\n힌트: your next pull:\n힌트:\n힌트:   git config pull.rebase false  # merge\n힌트:   git config pull.rebase true   # rebase\n힌트:   git config pull.ff only       # fast-forward only\n힌트:\n힌트: You can replace "git config" with "git config --global" to set a default\n힌트: preference for all repositories. You can also pass --rebase, --no-rebase,\n힌트: or --ff-only on the command line to override the configured default per\n힌트: invocation.\nfatal: Need to specify how to reconcile divergent branches.\n')),"\n",t.createElement(n.p,null,"-> ",t.createElement(n.code,null,"git config --global pull.rebase true")," 명령어로 config 설정함"),"\n",t.createElement(n.p,null,"github,gitLab 상관없이\n이 git config 설정에 따라서 pull 했을 때 rebase 할지 merge 할지 선택 가능하다."),"\n",t.createElement(n.h3,null,"git conflict 이후에도 rebase --continue or merge --continue 를 해준다 왜?"),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://baeji77.github.io/dev/git/etc/git-rebase-and-confilct-resolve/"},"rebase 를 통한 conflict 해결 방법Permalink")),"\n",t.createElement(n.h3,null,t.createElement(n.a,{href:"https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0"},"rebase vs merge 차이")," 정리"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Git에서 한 브랜치에서 다른 브랜치로 합치는 방법에는 merge 와 rebase 가 있다"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.h4,null,"merge"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"master 브랜치에서 갈라져 나온 특정 브랜치를 master 브랜치에 합칠때 merge  merge 사용"),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Merge_(version_control)"},"3-way-merge")," 로 커밋 두 개(C3, C4)와 공통 조상(C2)을 사용하는 3-way Merge로 새로운 커밋을 만든다"),"\n",t.createElement(n.li,null,"Merge 의 경우는 두 브랜치의 최종결과만을 가지고 합친다."),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.h4,null,"rebase"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"rebase 명령으로 한 브랜치에서 변경된 사항을 다른 브랜치에 적용할 수 있다"),"\n",t.createElement(n.li,null,"Rebase는 보통 리모트 브랜치에 커밋을 깔끔하게 적용하고 싶을 때 사용"),"\n",t.createElement(n.li,null,"Rebase 의 경우는 브랜치의 변경사항을 순서대로 다른 브랜치에 적용하면서 합친다"),"\n",t.createElement(n.li,null,"로컬 브랜치에서 작업할 때는 히스토리를 정리하기 위해서 Rebase 할 수도 있지만, 리모트 등 어딘가에 Push로 내보낸 커밋에 대해서는 절대 Rebase 하지 말아야 한다"),"\n"),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?t.createElement(n,e,t.createElement(a,e)):a(e)},o=l(8804);function i(e){return t.createElement(o.Z,e,t.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-git-2022-04-13-git-conflict-rebase-merge-mdx-651ea20d162011283275.js.map