export default{
	path : '/cinema',
	component : () => import ('@/views/Cinema'),
	//二级路由
	children : [
		{
			path : 'cinemaCity',
			component : () => import ('@/components/CinemaCity')
		},
		{
			path : 'cinemaList',
			component : () => import ('@/components/CinemaList')
		},
		{
			path : 'cinemaDetail/:cinemaId',

			components : {
				//default : () => import ('@/components/CinemaList'),
				cinemaDetail : () => import('@/views/Cinema/cinemaDetail')
			}/*,
			props : {
				cinemaDetail : true
			}*/
		},
		{
			path : 'cinemaSearch',
			component : () => import ('@/components/CinemaSearch')
		},
		{
			path : '/cinema',
			redirect : '/cinema/cinemaList'
		}
	]

}