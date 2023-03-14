import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://avatars.githubusercontent.com/u/86410106?v=4' // my Picture
			: 'https://www.damiestechnologies.com/img/programmer.gif';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://www.damiestechnologies.com/img/programmer.gif"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is Rahil Khan and I enjoy creating things that
					live on the internet.
					<br /> Fast Forwarding to today, I am a DevOps Engineer
					and deploy anything on the internet. I Learned alot about
					teamwork, leadership, and communication. After months
					of rigorous training, here I am Ready for an Action!!!
					<span style={{ color: `#00a0a0` }}>
						{' '}
						If you got an exciting opportunity, drop a message.
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
