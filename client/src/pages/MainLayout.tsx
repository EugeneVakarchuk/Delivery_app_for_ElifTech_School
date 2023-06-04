import React from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import classes from "../styles/page.module.less";

const MainLayout: React.FC = () => {
	return (
		<div className={classes.mainLayout}>
			<header className={classes.header}>
				<Link className={classes.headerLink} to="shop">
					Shop
				</Link>
				<Link className={classes.headerLink} to="cart">
					Cart
				</Link>
			</header>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
