import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { blue, grey, pink } from "@material-ui/core/colors";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dhezjkmsr/image/upload/v1722781032/products/yegttwrgtpoo7ro6gh9c.jpg"
              alt="Founder"
            />
            <Typography>Tarun Yadav</Typography>
            <span>This is just a personal project made by me @Tarun</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Links</Typography>
            <a href="https://github.com/Tarunyadavvvvv" target="blank">
              <GitHubIcon sx={{ color: grey[500] }} className="githubSvgIcon" />
            </a>
            <a href="https://www.linkedin.com/in/tarunyadavvvvv" target="blank">
              <LinkedInIcon
                sx={{ color: blue[800] }}
                className="linkedinSvgIcon"
              />
            </a>
            <a href="https://instagram.com/tarunyadavvvvv" target="blank">
              <InstagramIcon sx={{ color: pink[100] }} className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
