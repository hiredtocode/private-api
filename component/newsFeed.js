const NewsFeed = () => {
	const [articles, setArticles] = useState(null)

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://localhost:8000/news',
		}

		axios
			.request(options)
			.then(response => {
				console.log(response.data)
				setArticles(response.data)
			})
			.catch(error => {
				console.error(error)
			})
	}, [])
}
