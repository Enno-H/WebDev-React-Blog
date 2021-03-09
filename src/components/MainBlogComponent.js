import {makeStyles} from "@material-ui/core/styles";
import CustomMarkdown from "./MarkdownComponent";
import PropTypes from "prop-types";
import React from "react";



const useStyles = makeStyles((theme) => ({
	markdown: {
		...theme.typography.body2,
		padding: theme.spacing(3, 0),
	}
}));

function MainBlogComponent(props) {
	const classes = useStyles();
	const { post } = props;

	return (
		<CustomMarkdown className={classes.markdown} key={post.substring(0, 60)}>
			{post}
		</CustomMarkdown>
	);
}

MainBlogComponent.propTypes = {
	post: PropTypes.string,
};

export default MainBlogComponent;