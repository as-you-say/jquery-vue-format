// 뷰 컴포넌트는 한 페이지당 하나를 정의한다.
new Vue({
    // 항상 화면 전체를 감싸는 div 가 존재하며 그 아이디는 app 으로 한다.
    // <div id="app"></div>
    el: "#app",

    // 데이터 구조
    data: {
        // 이 페이지에서 사용하는 공통코드 목록을 여기에 저장한 후 사용한다.
        code: {
            "상위코드" : [
                {id:'하위코드', name:'하위코드 이름'}
            ]
        },
        // 테이블 데이터는 한개의 비어있는 샘플 오브젝트와 함께 정의한다.
        // 이렇게 정의해야 어떤 데이터를 넘겨받을 수 있는지 명확히 알 수 있다.
        sampleTableData: [
            {id:'기본키', name:'이름', email:'이메일'}
        ],
        // 상세조회에 대한 데이터는 보여줄 데이터의 컬럼명으로 미리 정의해 둔다
        sampleDetailData: {
            id:'기본키',
            name:'이름',
            email:'이메일'
        }
    },
    mounted: function () {
        // 화면이 마운트 된 후에 최초 1회만 실행하는 함수
        // 초기에 필요한 데이터를 전부 가져와서 상단의 data 안에 집어 넣을 때 사용한다.

        // 1. 공통코드 가져오기
        // 2. 초기 데이터 가져오기
    },
    updated: function () {},
    methods: {
        // Vue는 양방향 바인딩이기 때문에 항상 데이터를 지워주는 함수를 만든다.
        // - 샘플 테이블 데이터 지우기
        initSampleTableData: function () {
            // this 객체를 that 에 담아두고 사용한다.
            var that = this;
            that.sampleTableData = [
                {id:'', name:'', email:''}
            ]
        },
        // - 샘플 디테일 데이터 지우기
        initSampleDetailData: function () {
            // this 객체를 that 에 담아두고 사용한다.
            var that = this;
            that.sampleDetailData = {
                id:'',
                name:'',
                email:''
            }
        },
        // UI 이벤트인 경우 앞에 on 을 붙여서 정의한다.
        // 기본적으로 이벤트에서 파라미터는 존재하지 않는것으로 한다.
        // 필요시에는 상단의 data 를 참조하여 실행한다.
        onClick___Button: function(){
            // UI
            // 최대한 JavaScript를 이용하여 코드를 작성할 수 있도록 한다.
            // $('하나만 존재하는 셀렉터') : document.querySelector('셀렉터');
            // $('여러개가 존재하는 셀렉터') : document.querySelectorAll('셀렉터').forEach(function(i, element){});
            // 클래스 추가/삭제 방법 정의 필요
            // 특정 속성 추가/삭제 방법 정의 필요
            // 주의 ** UI 속성을 위에 정의해두고 동적으로 전환되도록 하는것은, 인증정보/로딩/탭 및 사이드 선택 3가지를 제외하고서는 자제하도록 한다.

            // API 
            // Ajax 를 사용한 호출함수는 모두 apis-baron.js 안에 정의되어있다.
            // 따라서 아래와 같이 호출할 수 있다.
            // 파라미터에 대한 밸리데이션은 BARON 오브젝트 내부에서 진행된다.
            var that = this;
            BARON.getSampleTableData({
                // 파라미터
                pageNo: 1
            }).then(function(value){
                // 리턴받은 데이터 (필요시 filter 함수를 통해 가공)
                that.sampleTableData = value.sampleTableData;
            }).catch(function(error){
                // 에러 팝업 및 로그
                alert('샘플 테이블 데이터 조회 오류');
                console.log('샘플 테이블 데이터 조회 오류');
            });
        },
        onChange___Input: function(){
            var that = this;
            BARON.getSampleDetailData({
                id: '기본키'
            }).then(function(value){
                that.sampleDetailData = value.sampleDetailData;
            }).catch(function(error){
                alert('샘플 디테일 데이터 조회 오류');
                console.log('샘플 디테일 데이터 조회 오류');
            });
        }
    }
})