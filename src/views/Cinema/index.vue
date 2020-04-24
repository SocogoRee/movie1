<template>
	<div id="main">
		<Header title="哈哈影院"/>
			<div id="content">
				<div class="cinema_menu">
					<router-link tag="div" to="/cinema/cinemaCity" class="cinemaCity_name">
						<span>{{ $store.state.city.nm }}</span><i class="iconfont icon-lower-triangle"></i>
					</router-link>
					<div class="hot_switch">
						<router-link tag="dive" to="/cinema/CinemaList" class="hot_item">正在放映</router-link>
						<!--
						</div>
						<div class="brand_swtich">
							距离 <i class="iconfont icon-lower-triangle"></i>
						</div>
						<div class="feature_switch">
							价格 <i class="iconfont icon-lower-triangle"></i>
						</div>
						-->
					</div>
					
					<router-link tag="div" to="/cinema/CinemaSearch" class="cinemaSearch_entry">
						<i class="iconfont icon-sousuo"></i>
					</router-link>
				</div>			
				<keep-alive>
	                <router-view />
	            </keep-alive>
			</div>
		<TabBar />
		<router-view name="cinemaDetail" />		
	</div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import CinemaList from '@/components/CinemaList';

export default {
	name : 'Cinema',
	components : {
		Header,
		TabBar,
		CinemaList
	}

}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}

.cinema_menu .cinemaCity_name{ margin-left: 20px; height:100%; line-height: 45px;}
.cinema_menu .cinemaCity_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.cinema_menu .cinemaCity_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}

.cinema_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.cinema_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.cinema_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.cinema_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}

.cinema_menu .cinemaSearch_entry{ margin-right:20px; height:100%; line-height: 45px;}
.cinema_menu .cinemaSearch_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.cinema_menu .cinemaSearch_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .cinemaSearch_entry i{  font-size:24px; color:red;}

.slide-enter-active{ animation : 13s detailMove;}
@keyframes detailMove{
	0%{
		transform : translateX(100%);
	}
	100%{
		transform : translateX(0);
	}
}

</style>