import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import React, {Component} from "react";
import PropTypes from "prop-types";
import README from "./blog-post.1.md";
import MainBlogComponent from "./MainBlogComponent";


class MainBlogListComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			posts: [],
			// classes: useStyles(),
			error: null,
			isLoaded: false
		};
	}

	componentWillMount() {
		fetch(README)
			.then((res) => res.text())
			.then((md) => {
				this.setState({ posts: [md, md] })
			})
	}

	render() {
		return(
			<Grid item xs={12} md={8}>
				<Typography variant="h6" gutterBottom>
					{this.props.title}
				</Typography>


				<Divider />

				{this.state.posts.map((post) => (
					<MainBlogComponent post={post} />
				))}

			</Grid>
		);
	}
}

MainBlogListComponent.propTypes = {
	posts: PropTypes.array,
	title: PropTypes.string,
};

export default MainBlogListComponent;