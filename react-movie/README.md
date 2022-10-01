useEffect((),[]) => 두개의 argument를 가지는데 첫번째는() 딱 한번만 실행하고 싶은 코드, 
두번째는 [] 비어있으면 처음 한번만 실행, keyword를 가지면 keyword가 변화할때 마다 코드가 실행 

const getMovies = async() => {
    const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };

api 호출할때 .then 안쓰고 async await 사용하는거 한번 더 연습하기.

router => URL을 보고있는 component이다

Switch => Route 를 찾는거 원하는 Route를 한번에 렌더링 할수있게 해준다.

<Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

=>라우터 구조 복습하기. Router 안에 Switch 그 안에 Route로 페이지 설정 가능.

Link => 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
원하는 태그에 <Link to ="주소">{내용}</Linsk> 하면 새로고침 없이 빠르게 이용할수 있다.

useParams => 변화된 url의 값을 가져온다.