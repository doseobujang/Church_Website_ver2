<template>
    <div class="header-nav">
        <div class="title">
            <a href="https://gimhaesimin.netlify.app/index.html">
                <img src="../assets/logo.svg"/>
            </a>
        </div>
        <div class="navbar-left">
            <div class="dropdown service">
                <button class="dropbtn">예배</button>
                <div class="dropdown_content">
                    <a href="https://gimhaesimin.netlify.app/service/live"> 라이브 </a>
                    <a href="https://gimhaesimin.netlify.app/service/service"> 설교 </a>
                    <a href="https://gimhaesimin.netlify.app/service/worship-guide">예배안내</a>
                </div>
            </div>
            <div class="dropdown strive">
                <button class="dropbtn">성장</button>
                <div class="dropdown_content">
                    <a href="https://gimhaesimin.netlify.app/strive/supported_church"> 함께하는 교회 </a>
                </div>
            </div>
            <div class="dropdown info">
                <button class="dropbtn">자료</button>
                <div class="dropdown_content">
                    <a href="https://gimhaesimin.netlify.app/info/QT"> QT </a>
                    <a href="https://gimhaesimin.netlify.app/info/gallery"> 갤러리 </a>
                    <a href="https://gimhaesimin.netlify.app/info/helpfullinks"> 도움되는 링크 </a>
                </div>
            </div>
            <div class="dropdown education">
                    <button class="dropbtn">교육</button>
                    <div class="dropdown_content">
                        <a href="https://gimhaesimin.netlify.app/education/teen_team"> 중고등부 </a>
                    </div>
                </div>
            <div class="dropdown communication">
                <button class="dropbtn">소통</button>
                <div class="dropdown_content">
                    <a href="https://gimhaesimin.netlify.app/communication/community"> 커뮤니티 </a>
                    <a href="https://gimhaesimin.netlify.app/communication/FAQ"> FAQ </a>
                    <a href="https://gimhaesimin.netlify.app/communication/contactus"> 문의 </a>
                </div>
            </div>
            <div class="dropdown church">
                <button class="dropbtn">교회</button>
                <div class="dropdown_content">
                    <a href="https://gimhaesimin.netlify.app/church/belief"> 신념 </a>
                    <a href="https://gimhaesimin.netlify.app/church/helpers"> 섬기는 사람들 </a>
                    <a href="https://gimhaesimin.netlify.app/church/map"> 오시는 길 </a>
                </div>
            </div>
        </div>
        <div class="navbar-right">
            <input type="button" id="sidebar-search">
            <input type="button" id="sidebar-toggle" onclick="Show.Sidebar();">
        </div>
    </div>
</template>

<script>

</script>

<style>
/* 페이지 title 설정 */

.header-nav {
    display: flex;
    justify-content: space-between;
    background-color: #ffffff ;
    border: black 10px ;
    height: 65px;
    /* 필요없음. 기본값 */
    /* overflow: visible; */
    border-radius: 10px; /* 이쁘게 하기*/
    font-family: "Gowun Dodum", sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /*그림자*/
    position: absolute; /* 고정*/
    /* 움직이기 */
    left: 1.5%; 
    width: 97%; /* 띄우기 !*/
}

.header-nav .title img {
    width: min-content;
    height: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0px;
}

.header-nav .title a{
    font-size: 0px;
}

.navbar-left {
    display: flex;
}

.navbar-left button{
    border: none;
    font-size: 18px;
    color: rgb(0, 0, 0);
    height: 28px;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: inherit;
    width: 110px;
    font-family: "Gowun Dodum", sans-serif;
}

.navbar-left .dropdown_content {
    display: none;
    position: relative;
    background-color: #ffffff;
    left: 50%; /* Set left to 0 to align with the parent */
    transform: translateX(-50%); /* Adjust to center the content */
    width: 110px;
    z-index: 3;
    border-radius: 10px;
    box-shadow: 0px 4px 8px  rgba(0,0,0,0.1);
}

.navbar-left .dropdown_content a{
    float: none;
    padding: 15px 10px;
    display: block;
    font-size: 14px;
    border-radius: 10px;
    text-align: center;
}

.navbar-left .dropdown_content a:hover{
    background-color: #ddd;
}

.navbar-left .dropdown:hover .dropdown_content{
    display: block;
}

@media screen and (min-width: 376px) and (max-width: 768px) {   
    .navbar-left {
        display:none;
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .navbar-left {
        display:flex;
    }

    .navbar-left button {
        padding: 1px 15px;
        font-size: 16px;
    }

    .navbar-left button, .navbar-left .dropdown_content {
        width: 70px;
    }

    .navbar-left .dropdown_content a {
        font-size:12px;
    }
}
</style>