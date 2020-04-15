export default{
	path : '/cinema',
	component : () => import ('@/views/Cinema')
	/*二级路由
	children : [
		{
			path : 'cinemaList',
			component : () => import ('@/components/CinemaList')
		},
		{
			path : 'cinemaSearch',
			component : () => import ('@/components/cinemaSearch')
		},
		{
			path : '/cinema',
			redirect : '/cinema/CinemaList'
		}
	]*/

}