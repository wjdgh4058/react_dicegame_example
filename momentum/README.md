step 1 . element 찾기
step 2 . event를 listen 하기
step 3 . 그 event에 반응

style 작업에 유리한 것은 css
event, animation 에 적합한 것은 javascript

classList.toggle("") -> 클래스가 있으면 제거 없으면 추가 해준다. 그래서 class의 포함여부를 바꿔준다.

preventDefault() -> 브라우저가 기본적으로 하는 행동을 막아준다.

localStorage.setItem("key","value") -> localStorage에 값을 저장한다.

localStorage.getItem() -> localStorage에 값을 가져온다.

localStorage.removeItem() -> localStorage에 값을 저장한다.

interval -> 매번 일어나야 하는 무언가 -> 두개의 argument를 받는다. 1번째는 실행하고자 하는 function
2번째는 호출되는 function 간격을 몇 ms로 할지   => setInterval( , )

timeout -> 두개의 argument를 받는다. setTimeout(실행할 function,얼마나 기다릴지)

padStart(문자열길이,'추가할문자') -> 문자열 길이를 정하고, 문자열길이보다 짧으면 추가할 문자를 앞에 추가해서 길이를 맞춰준다. 
padEnd() -> 추가할 문자를 뒤에 추가해준다.

이모트 => 윈도우 + .   => 👌

array.forEach(function) => array에 들어있는 item들을 하나씩 인자로 넣어서 함수를 실행시켜준다.

array.filter(function) => array에 있는 요소들로 한번씩 함수가 실행되고 true인 요소들은 유지, false인 요소는 제거하고 array를 재생성한다.