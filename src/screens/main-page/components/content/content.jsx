import './content.scss'

// ====================================================

const Content = () => {
	return (
		<div className="content">
			<div className="content__background"></div>

			<div className="content__main-info">
				<div className="content__avatar"></div>
				<p className="content__name">Tyler, The Creator</p>
				<p className="content__followers">1.2M followers</p>
			</div>

			<div className="content__posts posts">
				<h1 className="posts__title">Posts</h1>
				<div className="posts__list">
					<div className="posts__item">
						<div className="posts__item-title"></div>
						<div className="posts__item-content"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

// ====================================================
// export

export default Content
