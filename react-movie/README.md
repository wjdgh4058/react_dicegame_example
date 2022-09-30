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