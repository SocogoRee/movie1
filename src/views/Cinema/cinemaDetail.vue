<template>
	<div id="detailCinema" class="slide-enter-active">
		<Header title="影院详情">
            <i class="iconfont icon-right" @touchstart="handleToBack"></i>
        </Header>
        <div id="content" class="contentDetail">
			<div class="detail_list">
				<div class="detail_list_bg"></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img src="/image/image1.jpg" alt="">
					</div>
					<div class="detail_list_info">
						<h2>UA电影城(上海梅龙镇广场店)</h2>
						<p>静安区南京西路1038号梅龙镇广场10楼（近江宁路)</p>
						<p>电话：020-85111688</p>
					</div>
				</div>
			</div>
			<div class="serve">
				<p>影院服务</p>
				<p>退：未取票用户放映前60分钟可退票</p>
				<p>改签：未取票用户放映前60分钟可改签</p>
				<p>3D眼睛</p>
				<p>儿童优惠：1.2米以上全票，1.2米(含1.2米)以下免票(无座)</p>
				<p>可停车：凭当日有效票领取停车券，享受梅龙镇广场停车首小时免费</p>
				<p>WiFi</p>
				<p>情侣座:无情侣座</p>
			</div>
        </div>
	</div>
</template>

<script>
import Header from '@/components/Header';

export default {
	name : 'CinemaDetail',
	components : {
		Header
	},
	methods : {
		handleToBack(){
			this.$router.back();
		}
	}
}
</script>

<style scoped>

#detailCinema{ position: absolute; left:0; top:0; z-index: 100; width:100%; min-height:100%; background:white;}
#detailCinema.slide-enter-active{ animation:.3s slideMove;}
@keyframes slideMove{
    0%{ transform : translateX(100%); }
    100%{ transform : translateX(0); }
}

#content.contentDetail{ display: block; margin-bottom:0;}

#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width:100%; height:100%; background: 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
.detail_list .detail_list_img img{ width:100%; height: 100%;}

.detail_list .detail_list_info{ margin-top: 20px;}
.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}

.detail_list .serve{ margin-top: 20px;}
.detail_list .serve h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .serve p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
</style>