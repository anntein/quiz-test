(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7776:(t,e,s)=>{Promise.resolve().then(s.bind(s,9265))},9265:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var l=s(5155),a=s(2115);let r=t=>{let{onStartQuiz:e}=t;return(0,l.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center p-4",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold mb-8",children:"Quiz Clash ⚡️"}),(0,l.jsx)("button",{onClick:e,className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors",children:"New Quiz"})]})},n=t=>{let{question:e,onAnswer:s,currentQuestionNumber:r,totalQuestions:n,showEmoji:i}=t,[o,d]=(0,a.useState)(null),[c,x]=(0,a.useState)(5),[u,h]=(0,a.useState)(!1),[m,_]=(0,a.useState)(null),b=(0,a.useCallback)(async t=>{u||(h(!0),d(t),m&&(clearInterval(m),_(null)),s(t))},[u,s,m]);(0,a.useEffect)(()=>{x(5),h(!1),d(null);let t=setInterval(()=>{x(e=>e<=1&&!u?(clearInterval(t),_(null),setTimeout(()=>{s("time_out")},0),0):e>0?e-1:0)},1e3);return _(t),()=>{clearInterval(t)}},[e.id,u,s]);let w=c/5*100;return(0,l.jsx)("div",{className:"min-h-screen flex flex-col items-center justify-center p-4",children:(0,l.jsxs)("div",{className:"w-full max-w-2xl",children:[(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("div",{className:"w-full h-2 bg-gray-200 rounded-full overflow-hidden",children:(0,l.jsx)("div",{className:"h-full bg-gray-400",style:{width:"".concat(w,"%")}})}),(0,l.jsxs)("div",{className:"text-center mt-2 font-bold",children:[c," seconds left"]})]}),(0,l.jsxs)("div",{className:"mb-8 text-center",children:[(0,l.jsxs)("p",{className:"text-sm text-gray-500 mb-2",children:["Question ",r," of ",n]}),(0,l.jsx)("h2",{className:"text-xl font-bold",children:e.text})]}),(0,l.jsx)("div",{className:"space-y-4",children:e.alternatives.map(t=>(0,l.jsxs)("button",{onClick:()=>b(t.id),disabled:u,className:"w-full p-4 text-left border rounded-lg transition-colors ".concat(u?t.id===e.correctAnswerId?"bg-[#222222] text-white":o===t.id?"bg-[#222222] text-white":"":"hover:bg-[#222222] hover:text-white"),children:[t.text," ",i&&t.id===e.correctAnswerId&&" \uD83E\uDD29"]},t.id))})]})})},i=t=>{let{score:e,totalQuestions:s,onReturnHome:a}=t,r=e/s*100;return(0,l.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center p-4",children:[(0,l.jsxs)("div",{className:"text-center mb-8",children:[(0,l.jsxs)("div",{className:"text-6xl font-bold mb-4",children:[e,"/",s]}),(0,l.jsxs)("p",{className:"text-xl text-gray-600 mb-2",children:[r,"% Correct"]}),(0,l.jsx)("p",{className:"text-lg",children:r>=80?"Excellent!":r>=60?"Good job!":"Keep practicing!"})]}),(0,l.jsx)("button",{onClick:a,className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors",children:"Return Home"})]})},o=JSON.parse('{"a":[{"id":"q1","text":"What is the capital of France?","alternatives":[{"id":"alt_0","text":"Paris"},{"id":"alt_1","text":"Berlin"},{"id":"alt_2","text":"Rome"},{"id":"alt_3","text":"Madrid"}],"correctAnswerId":"alt_0"},{"id":"q2","text":"Who wrote \'Romeo and Juliet\'?","alternatives":[{"id":"alt_0","text":"William Shakespeare"},{"id":"alt_1","text":"Leo Tolstoy"},{"id":"alt_2","text":"Mark Twain"},{"id":"alt_3","text":"Charles Dickens"}],"correctAnswerId":"alt_0"},{"id":"q3","text":"What is the largest planet in our solar system?","alternatives":[{"id":"alt_0","text":"Mars"},{"id":"alt_1","text":"Earth"},{"id":"alt_2","text":"Jupiter"},{"id":"alt_3","text":"Venus"}],"correctAnswerId":"alt_2"},{"id":"q4","text":"Which element has the chemical symbol \'O\'?","alternatives":[{"id":"alt_0","text":"Oxygen"},{"id":"alt_1","text":"Gold"},{"id":"alt_2","text":"Silver"},{"id":"alt_3","text":"Hydrogen"}],"correctAnswerId":"alt_0"},{"id":"q5","text":"In what year did the Titanic sink?","alternatives":[{"id":"alt_0","text":"1912"},{"id":"alt_1","text":"1923"},{"id":"alt_2","text":"1905"},{"id":"alt_3","text":"1898"}],"correctAnswerId":"alt_0"},{"id":"q6","text":"Which country hosted the 2016 Summer Olympics?","alternatives":[{"id":"alt_0","text":"Brazil"},{"id":"alt_1","text":"China"},{"id":"alt_2","text":"UK"},{"id":"alt_3","text":"Russia"}],"correctAnswerId":"alt_0"},{"id":"q7","text":"What is the hardest natural substance on Earth?","alternatives":[{"id":"alt_0","text":"Diamond"},{"id":"alt_1","text":"Gold"},{"id":"alt_2","text":"Iron"},{"id":"alt_3","text":"Granite"}],"correctAnswerId":"alt_0"},{"id":"q8","text":"Who painted the Mona Lisa?","alternatives":[{"id":"alt_0","text":"Leonardo da Vinci"},{"id":"alt_1","text":"Pablo Picasso"},{"id":"alt_2","text":"Vincent van Gogh"},{"id":"alt_3","text":"Claude Monet"}],"correctAnswerId":"alt_0"},{"id":"q9","text":"What is the smallest prime number?","alternatives":[{"id":"alt_0","text":"2"},{"id":"alt_1","text":"1"},{"id":"alt_2","text":"3"},{"id":"alt_3","text":"5"}],"correctAnswerId":"alt_0"},{"id":"q10","text":"What is the capital city of Australia?","alternatives":[{"id":"alt_0","text":"Canberra"},{"id":"alt_1","text":"Sydney"},{"id":"alt_2","text":"Melbourne"},{"id":"alt_3","text":"Perth"}],"correctAnswerId":"alt_0"}]}');async function d(){return(function(t){let e=[...t];for(let t=e.length-1;t>0;t--){let s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e})(o.a).slice(0,5)}function c(){let[t,e]=(0,a.useState)("home"),[s,o]=(0,a.useState)(!1),[c,x]=(0,a.useState)({currentQuestionIndex:0,questions:[],userAnswers:[],score:0}),u=async()=>{try{let t=await d();x({currentQuestionIndex:0,questions:t,userAnswers:[],score:0}),e("question")}catch(t){console.error("Failed to start quiz:",t),alert("Failed to load questions. Please try again.")}},h=async t=>{let s=c.questions[c.currentQuestionIndex],l="time_out"!==t&&s.correctAnswerId===t;l&&(o(!0),await new Promise(t=>setTimeout(t,1e3)),o(!1));let a={...c,userAnswers:[...c.userAnswers,t],score:l?c.score+1:c.score,currentQuestionIndex:c.currentQuestionIndex+1};x(a),a.currentQuestionIndex>=c.questions.length&&e("results")};return"home"===t?(0,l.jsx)(r,{onStartQuiz:u}):"question"===t&&c.questions.length>0?(0,l.jsx)(n,{question:c.questions[c.currentQuestionIndex],onAnswer:h,currentQuestionNumber:c.currentQuestionIndex+1,totalQuestions:c.questions.length,showEmoji:s}):"results"===t?(0,l.jsx)(i,{score:c.score,totalQuestions:c.questions.length,onReturnHome:()=>{e("home"),o(!1),x({currentQuestionIndex:0,questions:[],userAnswers:[],score:0})}}):null}}},t=>{var e=e=>t(t.s=e);t.O(0,[441,684,358],()=>e(7776)),_N_E=t.O()}]);