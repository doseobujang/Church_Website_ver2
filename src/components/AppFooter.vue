<template>
    <div class="app-footer">
        <div class="container">
            <div class="footA">
                <h2>김해시민교회</h2>
                <p>
                    주소: 경상남도 김해시 장유로 190 부영프라자 504호
                    <br />
                    연락처: 055-323-0691
                    <br />
                    <a href="https://gimhaesimin.netlify.app/">https://gimhaesimin.netlify.app/</a>
                </p>
                <nav class="footD">
                    <h3>SNS</h3>
                    <ul>
                        <li>
                            <a href="https://youtube.com/@coh.s?si=zNhjSBaVsbcJDfhj" target="_blank" title="youtube"><img src="../assets/youtube.svg"/></a>
                        </li>
                        <li>
                            <a href="https://blog.naver.com/gimhae_simin" target="_blank" title="blog"><img src="../assets/blog.svg"/></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footB">
                <div>
                    <h3>ABOUT</h3>
                    <ul>
                        <li>
                            <a href="https://gimhaesimin.netlify.app/about/address">주소</a>
                        </li>
                        <li>
                            <a href="https://gimhaesimin.netlify.app/church/map">지도</a>
                        </li>
                        <li>
                            <a href="https://gimhaesimin.netlify.app/church/helpers">스태프</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>SUPPORT</h3>
                    <ul>
                        <li>
                            <a href="https://gimhaesimin.netlify.app/communication/FAQ">자주 묻는 질문</a>
                        </li>
                        <li>
                            <a href="https://gimhaesimin.netlify.app/communication/contactus">문의</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>CONTENTS</h3>
                    <ul>
                        <li>
                            <a href="https://gimhaesimin.netlify.app/contents/inform.html">공지사항</a>
                        </li>
                        <li>
                            <a href="https://gimhaesimin.netlify.app/dev/developer">개발자</a>
                        </li>
                        <li>
                            <a href="https://blog.naver.com/gimhae_simin">블로그</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footC">ⓒ KL corp. All rights reserved.</div>
    </div>
</template>

<script>

</script>

<style>
/* footer */
.app-footer {
    padding:20px;
    border-top:1px solid black;
    background-color:#2B5566;
    color: #fff;
}


/* footA: site information */
.footA a {
    color: inherit;
}

/* footB: footer menu */

.footB h3 {
    margin-bottom:10px;
    border-bottom:1px solid currentColor;
    font-size: 14px;
}

.footB ul {
    list-style: none;
    margin:0;
    padding:0;
}

.footB a {
    display: block;
    padding:5px;
    color: inherit;
    font-size:12px;
}

.footB a:hover {
    background-color: rgba(0,0,0,0.3);
}

/* footC: corp */
.footC {
    text-align:center;
    font-size: 12px;
}

/* footD: SNS menu */
.footD ul {
    display: flex;
    list-style:none;
    margin: 0;
    padding: 0;    
}

.footD img {
    width:30px;
    height:30px;
    margin-right:8px;
}

.footD img:hover {
    background-color:rgba(0,0,0,0.3);
}

/* 페이지 nav 설정 */
@media screen and (min-width: 769px) {
    /* footer menu 화면에 맞게 조정 */
    footer .container {
        display: flex;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    .footA {
        flex: 0 0 40%;
    }

    .footB {
        flex: 0 0 60%;
    }

    /* 메뉴 수평 정렬 */
    .footB {
        display: flex;
    }

    .footB div {
        flex: 1;
    }

    .footB div:not(:first-child) {
        margin-left: 40px;
    }

}
</style>