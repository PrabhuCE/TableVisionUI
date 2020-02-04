import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import image1 from '../../static/images/download1.jpeg';
import image2 from '../../static/images/download2.jpeg';
import image3 from '../../static/images/download3.jpeg';
import image4 from '../../static/images/download4.jpeg';
import image5 from '../../static/images/download5.jpeg';
import image6 from '../../static/images/download6.jpeg';
import Grid from '@material-ui/core/Grid';



const tileData = [
	{
		img: image1,
		title: 'Image',
		author: 'author',
	},
	{
		img: image2,
		title: 'Image',
		author: 'author',
	},
	{
		img: image3,
		title: 'Image',
		author: 'author',
	},
	{
		img: image4,
		title: 'Image',
		author: 'author',
	},
	{
		img: image5,
		title: 'Image',
		author: 'author',
	},
	{
		img: image6,
		title: 'Image',
		author: 'author',
	},
	{
		img: image1,
		title: 'Image',
		author: 'author',
	},
	{
		img: image2,
		title: 'Image',
		author: 'author',
	},
	{
		img: image3,
		title: 'Image',
		author: 'author',
	},
	{
		img: image4,
		title: 'Image',
		author: 'author',
	}
];

export default class ProjectContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tabValue: 0,
			imageSelected: tileData[0].img,
			selectedIndex: 0
		}
	}
	
	handleChange = (event, newValue) => {
		this.setState({ tabValue: newValue });
	};

	loadContent = () => {
		// change content based on tab and Image
		if (this.state.tabValue == 0) {
			return (
				<div>
					{this.state.selectedIndex == 0 ? <p>Test </p> : <p>TTTT</p>}
				</div>
			)
		}
		if (this.state.tabValue == 1) {
			return (
				<div>
					{this.state.selectedIndex == 0 ? <p>reerer </p> : <p>ssss</p>}
				</div>
			)
		}
		if (this.state.tabValue == 2) {
			return (
				<div style={{padding:"40px"}}>
					<button type="button" style={{height:"50px"}}>
						<a href={this.state.imageSelected} download>Download CSV</a>
					</button>
				</div>
			)
		}
	}

	render() {	
		const handleImageClicked = (index) => {
			this.setState({ imageSelected: tileData[index].img, selectedIndex: index });
		}
		return (
			<div>
				<div>
					<Grid container spacing={3} style={{padding:"40px"}}>
						<Grid item xs={12} md={6} lg={6} >
							<img src={this.state.imageSelected} style={{ height: "100%", width: "100%" }} />
						</Grid>
						<Grid item xs={12} md={6} lg={6} style={{ borderColor: "#e2dfdf", borderRadius: "1px", borderStyle: "solid", }}>
							<Tabs
								value={this.state.tabValue}
								onChange={this.handleChange}
								indicatorColor="#176529"
								textColor="primary"
								variant="fullWidth"
								style={{backgroundColor:"#c2e8c8"}}
								aria-label="full width tabs example"
							>
								<Tab label="Alt Text" />
								<Tab label="HTML" />
								<Tab label="CSV" />
							</Tabs>
							<div>
								{this.loadContent()}</div>
						</Grid>
					</Grid>
				</div>
				<div style={{display:"flex",overflow:"scroll"}}>
						{tileData.map((tile, index) => (
							<img src={tile.img} style={{padding:"5px"}} onClick={() => { handleImageClicked(index) }} alt={tile.title} />	
						))}
				</div>
			</div>
		);
	}
}

