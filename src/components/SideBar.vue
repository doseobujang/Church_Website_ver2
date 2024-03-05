<template>
    <div class="side-bar">
        <input type="button" id="opacity" @click="triggerShowSidebar" style="display:none"/>
        <div id="sidebar">
            <nav class="sidebar">
            <!-- sidebar content here -->
            <div class="side_menu service">
                예배
                <ul>
                    <li><a href="https://gimhaesimin.netlify.app/service/live"> 라이브 </a></li>
                    <li><a href="https://gimhaesimin.netlify.app/service/service"> 설교 </a></li>
                    <li><a href="https://gimhaesimin.netlify.app/service/worship-guide"> 예배안내 </a></li>
                </ul>
            </div>

            <div class="side_menu strive">
                성장
                <ul>
                    <li><a href="https://gimhaesimin.netlify.app/strive/supported_church"> 함께하는 교회 </a></li>
                </ul>
            </div>

            <div class="side_menu info">
                자료
                <ul>
                    <li><a href="https://gimhaesimin.netlify.app/info/QT"> QT </a></li>
                    <li><a href="https://gimhaesimin.netlify.app/info/gallery"> 갤러리 </a></li>
                    <li><a href="https://gimhaesimin.netlify.app/info/helpfullinks"> 도움되는 링크 </a></li>
                </ul>
            </div>

            <div class="side_menu education">
                교육
                <ul>
                    <li><a href="https://gimhaesimin.netlify.app/education/teen_team"> 중고등부 </a></li>
                </ul>
                </div>
            
            <div class="side_menu communication">
                소통
                <ul>
                    <li><a href="https://gimhaesimin.netlify.app/communication/community"> 커뮤니티 </a></li>
                    <li><a href="https://gimhaesimin.netlify.app/communication/FAQ"> 자주 묻는 질문 </a></li>
                    <li><a href="https://gimhaesimin.netlify.app/communication/contactus"> 문의 </a></li>
                </ul>
            </div>

            <div class="side_menu church">
                교회
                <ul>
                    <li><a href="https://gimhaesimin.netlify.app/church/belief"> 신념 </a></li>
                    <li><a href="https://gimhaesimin.netlify.app/church/helpers"> 섬기는 사람들 </a></li>
                    <li><a href="https://gimhaesimin.netlify.app/church/map"> 오시는 길 </a></li>
                </ul>
            </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { Show } from '../utils/sidebar.js';

export default {
    name: 'SideBar',
    methods: {
        triggerShowSidebar() {
            Show.Sidebar();
        }
    }
}
</script>

<style>
/* sidebar 설정 */
#opacity {
    position: absolute;
    top: 0;
    width:100%;
    height:100%;
    z-index:4;
    background-color : rgb(0, 0, 0, 0.3);
}
  
#sidebar {
    position: fixed;
    top: 0;
    right: -250px; /* Set initial position off the screen */
    z-index: 5;
    width: 250px;
    height: 100%;
    background-color: #333;
    transition: right 0.3s ease;
}
    
.sidebar {
    padding: 20px;
    color: #fff;
}

.sidebar a {
    color: white;
}

#sidebar-search {
    background: url("../assets/search-toggle.svg") no-repeat;
    background-position: center;
    border: 0px;
    padding: 0px;
    height: 65px;
    width: 65px;
}
    
#sidebar-toggle {
    background: url("../assets/sidebar-toggle.svg") no-repeat;
    background-position: center;
    border: 0px;
    padding: 0px;
    height: 65px;
    width: 65px;
}

@media screen and (max-width: 375px) {
    #sidebar-search {
        display: none;
    }
}
</style>