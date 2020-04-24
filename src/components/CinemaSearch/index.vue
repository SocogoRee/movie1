<template>
	<div class="cinemaSearch_body">
		<div class="cinemaSearch_input_wrapper">
			<i class="iconfont icon-sousuo"></i>
			<input type="text" v-model="message">
		</div>
		<div class="cinemaSearch_result">
			<h3>影院搜索</h3>
			<ul>
				<li>
					<div class="img"><img src="/image/image1.jpg"></div>
					<div class="info">
						<h4>UA电影城(上海梅龙镇广场店)</h4>
						<p>静安区南京西路1038号梅龙镇广场10楼（近江宁路)</p>
						<p>电话：020-85111688</p>
						<p>影院服务:退、改签、停车、WIFI……</p>
					</div>
				</li>
				<li>
					<div class="img"><img src="/image/image1.jpg"></div>
					<div class="info">
						<h4>UA电影城(上海梅龙镇广场店)</h4>
						<p>静安区南京西路1038号梅龙镇广场10楼（近江宁路)</p>
						<p>电话：020-85111688</p>
						<p>影院服务:退、改签、停车、WIFI……</p>
					</div>
				</li>	
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name : 'CinemaSearch'
}
</script>

<style scoped>
#content .cinemaSearch_body{ flex:1; overflow:auto;}
.cinemaSearch_body .cinemaSearch_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.cinemaSearch_body .cinemaSearch_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.cinemaSearch_body .cinemaSearch_input_wrapper i{font-size: 16px; padding: 4px 0;}
.cinemaSearch_body .cinemaSearch_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}

.cinemaSearch_body .cinemaSearch_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.cinemaSearch_body .cinemaSearch_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.cinemaSearch_body .cinemaSearch_result .img{ width: 60px; float:left; }
.cinemaSearch_body .cinemaSearch_result .img img{ width: 100%; }

.cinemaSearch_body .cinemaSearch_result .info{ float:left; margin-left: 15px; flex:1;}
.cinemaSearch_body .cinemaSearch_result .info h3{ font-size: 13px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.cinemaSearch_body .cinemaSearch_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.cinemaSearch_body .cinemaSearch_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.cinemaSearch_body .cinemaSearch_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}

.cinemaSearch_body .cinemaSearch_result .serve{ float:left; margin-left: 15px; flex:1;}
.cinemaSearch_body .cinemaSearch_result .serve p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.cinemaSearch_body .cinemaSearch_result .serve p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.cinemaSearch_body .cinemaSearch_result .serve p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>