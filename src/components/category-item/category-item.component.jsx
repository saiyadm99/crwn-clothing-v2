import './category-item.styles.scss'

const CategoryItem = ({category}) => {
	const {imageUrl, title} = category;
	console.log('sd')

	return (
		<div className="category-container">
			<div className="background-image" style={{
				backgroundImage: `url(${imageUrl})`
			}}/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Show</p>
			</div>
		</div>
	)
}

export default CategoryItem;