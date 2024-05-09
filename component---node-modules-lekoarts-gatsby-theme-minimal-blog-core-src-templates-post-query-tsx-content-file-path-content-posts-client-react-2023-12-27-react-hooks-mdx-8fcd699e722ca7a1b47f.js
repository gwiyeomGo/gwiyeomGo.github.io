"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2858],{7739:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u.p},default:function(){return o}});var l=t(6540),c=t(8453);function r(e){const n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",blockquote:"blockquote",pre:"pre",code:"code",img:"img",ol:"ol",h3:"h3",hr:"hr"},(0,c.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,l.createElement(n.a,{href:"https://react.dev/reference/react/hooks"},"훅?")),"\n",l.createElement(n.p,null,"원래 존재하는 어떤 기능에 마치 갈고리를 거는 것처럼\n끼어 들어가 같이 수행되는 것\n리액트 state의 생명주기 기능에 갈고리를 걸어 원하는\n시점에 정해진 함수를 싱행되도록 만드는것\n이때 실행되는 함수"),"\n",l.createElement(n.p,null,"훅은 use 로 시작"),"\n",l.createElement(n.h1,null,"useState"),"\n",l.createElement(n.p,null,"sate를 사용해서 값이 바귈때마다 재랜더링이 되도록 하는 함수"),"\n",l.createElement(n.h1,null,"useEffect"),"\n",l.createElement(n.p,null,"이펙트 = 부작용..\n하지만 리액트 사이드 이팩트 = 효과 혹은 영향을 뜻하는 이펙트\n예) 서버에서 데이터를 받아오거나 dom 변경 등 작업을 이펙트라고 부름\n다른 컴포넌트에 영향을 미칠 수 있는 작업들..\n사이드 이펙트를 실행할 수 있도록 해주는 훅"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"componentDidMount,componentDidUpdate,componentWillUnmount 동일"),"\n"),"\n",l.createElement(n.p,null,"useEffect(이펙트함수,의존성배열)\n의존성 배열 안에 있는 변수 중에 하나라도 값이 변경되었을때 이펙트 함수 실행\n이펙트함수는 처음 컴포넌트가 렌더링된 이후와 업데이트로 인한 재랜더링 이후 실행\n만약 이펙트함수가 마운트와 언마운트시 단 한번만 실행되게 하고 싶으면\n의존성배열에 [] 넣음"),"\n",l.createElement(n.p,null,"의존성배열이 없다면?\ndom 이 변경된 이후에 해당 이펙틑 함수를 싱행하라는 의미\n기본적으로 컴포넌트가 처음 렌더링될 때를 포함해서 매번 렌더링될 때\n이펙트가 실행\n=> componentDidMount,componentDidUpdate 와 동일 역할"),"\n",l.createElement(n.h2,null,"배경"),"\n",l.createElement(n.p,null,"react 를 사용해서 프로그래밍을 하면서 console에 나타나는 경고를 모두 제거하기로 계획했다.\n실제로 이전까지는 경고가 나타나는지 몰랐었는데 아래와 같은 경고를 만났다"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"React Hook useEffect has a missing dependency: 'load'. Either include it or remove the dependency array. (react-hooks/exhaustive-deps)."),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"\n  useEffect(() => {\n    load();\n  },[]);\n\n")),"\n",l.createElement(n.p,null,"경고를 없애기 위해서  []를 제거했다.\n그런데 load()가 얼마나 호출되는지 모르겠다"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null," useEffect(() => {\n    load();\n  });\n")),"\n",l.createElement(n.p,null,"문제는 해결됬지만 정확하게 useEffect이 어떤 역할을 하는지 어떻게 쓰는 건지 잘 모르겠다.\n지금부터는 useEffect 예제를 통해 사용법을 알아보려고 한다"),"\n",l.createElement(n.h2,null,"useEffect 는 뭐지?"),"\n",l.createElement(n.p,null,"hooks 중에 useEffect"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://ko.reactjs.org/docs/hooks-reference.html#useeffect"},"useEffect")," 에 전달된 함수는 화면에 렌더링이 완료된 후에 수행됩니다."),"\n",l.createElement(n.li,null,"기본적으로 동작은 모든 렌더링이 완료된 후에 수행됩니다만, 어떤 값이 변경되었을 때만 실행되게 할 수도 있습니다."),"\n"),"\n",l.createElement(n.h2,null,"useEffect에 두 번째 인자"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"두 번째 인자로써 []을 전달하는 것이 친숙한 componentDidMount와 componentWillUnmount에 의한 개념과 비슷"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"이 인자는 effect 가 종속되어 있는 값의 배열입니다."),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"useEffect(\n  () => {\n    const subscription = props.source.subscribe();\n    return () => {\n      subscription.unsubscribe();\n    };\n  },\n  [props.source],\n);\n\n")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"props.source 가 변경될 때에만 구독이 재생성될 것입니다"),"\n"),"\n",l.createElement(n.h2,null,"useEffect 안에 빈배열[]은 뭐를 의미하지?"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"effect를 수행하고 (mount를 하거나 unmount 할 때) 그것을 한 번만 실행하고 싶다면 두 번째 인자로 빈 배열([])을 전달할 수 있습니다.\n이를 통해 effect는 React에게 props나 state에서 가져온 어떤 값에도 의존하지 않으므로, 다시 실행할 필요가 전혀 없다는 것을 알려주게 됩니다."),"\n"),"\n",l.createElement(n.h2,null,"Hooks 의 Lifecycle"),"\n",l.createElement(n.img,{src:"https://i.stack.imgur.com/7q1jC.jpg",alt:"이미지"}),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"componentDidMount 처럼 구현"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"useEffect(() => {\n  // Your code here\n}, []);\n")),"\n",l.createElement(n.h3,null,"empty array? ( [] )"),"\n",l.createElement(n.p,null,"Without the second parameter the useEffect hook will be called on every render of the component which can be dangerous."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"useEffect(() => {\n  // Your code here\n});\n")),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"componentWillUnmount"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"}," useEffect(() => {\n    return () => {\n        console.log('componentWillUnmount');\n    };\n   }, []);\n")),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://ko.reactjs.org/docs/hooks-faq.html#from-classes-to-hooks"},"https://ko.reactjs.org/docs/hooks-faq.html#from-classes-to-hooks"),"\n",l.createElement(n.a,{href:"https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies"},"https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies"),"\n",l.createElement(n.a,{href:"https://react.vlpt.us/basic/16-useEffect.html"},"https://react.vlpt.us/basic/16-useEffect.html")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"useEffect 내부에서 정의된 함수는 렌더링과 무관하게 한 번만 생성"),"\n",l.createElement(n.li,null,"함수가 useEffect 내에서 정의되면 이러한 클로저 문제를 방지"),"\n",l.createElement(n.li,null,"콜백은 다른 함수 내에서 호출되는 함수"),"\n"),"\n",l.createElement(n.h1,null,"useAsync"),"\n",l.createElement(n.p,null,"요청 상태 관리"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://react.vlpt.us/integrate-api/03-useAsync.html"},"https://react.vlpt.us/integrate-api/03-useAsync.html")),"\n",l.createElement(n.h1,null,"useCallback"),"\n",l.createElement(n.p,null,"값이 아닌 함수를 반환한다\n의존성 배열을 바라미터로 받고\n의존성 배열에 있는 변수 중 하나라도 변경되면\n메모이제이션 된 콜백 함수를 반환"),"\n",l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.p,null,"현재 페이지 단위로 function 을 만들고 해당 페이지에 접속했을 때 최초 데이터를 조회하는 코드를 사용한다"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"\n  const load = useCallback(() => {\n    Service.getStatuses({\n      page: 1,\n      pageSize: 50\n    }).then((res) => SetStatus(res.data));\n  }, []);\n\n  useEffect(() => {\n    load();\n  }, [load]);\n\n")),"\n",l.createElement(n.p,null,"그런데 callback 은 왜 사용된건지 모르겠다."),"\n",l.createElement(n.p,null,"useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.\n리액트 개발을 하실 때, useCallback, useMemo, React.memo 는 컴포넌트의 성능을 실제로 개선할수있는 상황에서만 하세요."),"\n",l.createElement(n.p,null,"예를 들어서, User 컴포넌트에 b 와 button 에 onClick 으로 설정해준 함수들은, 해당 함수들을 useCallback 으로 재사용한다고 해서 리렌더링을 막을 수 있는것은 아니므로, 굳이 그렇게 할 필요 없습니다"),"\n",l.createElement(n.h1,null,"useMemo"),"\n",l.createElement(n.p,null,"Memoized value 를 리턴하는 훅\n컴포넌트가 다시 렌더링될 때마다 연산량이 높은 작업을 반복하는 것을 피할 수 있다"),"\n",l.createElement(n.h2,null,"useMemo  사용 경험"),"\n",l.createElement(n.p,null,"리스트 개발 경험\n리스트 아이템에 수정 모달이 존재했고\n수정 완료 후 리스트 아이템이 업데이트 되지 않았다 (최신 내용 안보임)\nuseMemo 를 사용해서 부모 컴포넌트가 넘겨주는 item 을 추적하고 item 변경시 리스트 아이템이의 정보를 조회하도록 코드를 수정했다\n빈 배열로 입력하면 첫 랜더링 시에만 실행!"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://refine.dev/blog/react-usememo/#introduction"},"https://refine.dev/blog/react-usememo/#introduction")),"\n",l.createElement(n.h1,null,"useRef"),"\n",l.createElement(n.p,null,"특정 컴포넌트에 접근할 수 있는 객체\n레퍼런스 객체를 반환\n레퍼런스 객체에는 .current 속성이 있는데 현재 레퍼런스하고 있는 엘리먼트를 의미"),"\n",l.createElement(n.p,null,"inputElem 라는 레퍼런스 객체를 input 태그에 넣으면\ninputElem.current 를 통해 실제 엘리먼트에 접근하여 focus() 함수를 호출"),"\n",l.createElement(n.p,null,"useRef 훅은\n매번 렌더링될 때마다 항상 같은 ref 객체를 반환\n내부의 데이터가 변경되었을 때 별도로 알리지 않는다는 점"),"\n",l.createElement(n.h1,null,"훅의 규칙"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"훅은 무조건 최상위 레벨에서만 호출\n반복문이나 조건문 또는 중첩된 함수를 안에서 훅을 호출하면 안된다는 뜻\n훅은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 합니다."),"\n"),"\n",l.createElement(n.h1,null,"react 18 hook"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"useId\n서버와 클라이언트에서 고유한 ID 값을 생성하기 위한 훅\n다만 리스트를 렌더링 할 때 map 함수 내에서\n반환하는 엘리먼트의 키로 사용하는 용도는 아니다"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"useTransition\n긴급하지 않은 업데이트를 모아서 처리\nstartTransition 과 같음"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"useDeferredValue\n긴급하지 않은 업데이트의 재렌더링을 연기할 수 있음"),"\n"),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.p,null,"라이브러리에서 사용하기 위한 것으로 개발자가 사용할 일은 거의 없음"),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"useSyncExternalStore\n외부 저장소를 구독할 수 있음\n외부 저장소를 컴포넌트의 state 와 연동해서 사용하고 싶을때"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"useInsertionEffect\ncss-in-js 라이브러리를 위한 훅\n렌더링 과정에서 스타일 삽입의 문제를 해결"),"\n"),"\n"),"\n",l.createElement(n.hr))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,c.RP)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},u=t(7292);function o(e){return l.createElement(u.A,e,l.createElement(a,e))}u.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-react-2023-12-27-react-hooks-mdx-8fcd699e722ca7a1b47f.js.map