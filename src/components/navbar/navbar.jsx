import st from './navbar.module.scss'

// ====================================================

const Navbar = () => {
	return (
		<nav className={st.navbar}>
			<div className={st.inner}>
				<div className={st.title}>Menu</div>
				<ul className={st.ul}>
					<li className={st.li}>
						<a href="" className={st.link}>
							Profile
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							News
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Messenger
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Music
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Videos
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Games
						</a>
					</li>
					<li className={st.li}>
						<a href="" className={st.link}>
							Apps
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
