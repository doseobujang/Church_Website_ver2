<template>
    <div class="top-Header">
        <div class="inner">
            <div class="inner-left">
                <a href="https://gimhaesimin.netlify.app/service/worship-guide">예배안내</a>
                <a href="https://gimhaesimin.netlify.app/church/map"> 오시는 길 </a>
                <a href="https://youtube.com/@coh.s?si=zNhjSBaVsbcJDfhj" class="youtube" target="_blank" title="시민교회 유튜브">유튜브</a>
            </div>
            <div class="inner-right">
                <a href="https://gimhaesimin.netlify.app/login/login">로그인</a>
                <a href="https://gimhaesimin.netlify.app/login/signup">회원가입</a>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
/* header 설정 */
.top-header a {
    font-size: 15px;
}

.inner {
    display: flex;
    justify-content: space-between;
    margin: 3px 20px;
}

/* inner-left: top navigation */
.inner-left {
    justify-content: center;
}

.inner-left a {
    margin:5px;  
}

.inner-left img {
    width:20px;
    height:20px;
    margin-right:8px;
}

/* inner-right: sign in/up */
.inner-right a {
    padding-top:10px;
}

@media screen and (max-width: 375px) {
    .inner-left {
        display: none;
    }
    
    .navbar-left {
        display:none;
    }
}
</style>