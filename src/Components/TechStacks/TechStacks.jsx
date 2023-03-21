import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';

const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Skills
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" style={{width: "50px"}}/>
          
					<span>Linux</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-git-plain colored' />
					<span>Git</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-terraform-plain colored' />
					<span>Terraform</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" style={{width: "50px"}}/>

					<span>AWS</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" style={{width:"50px"}} />
          
					<span>Jenkins</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" style={{width:"70px"}} />
					<span>Node</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" style={{width: "50px"}}/>
					<span>Kubernetes</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-docker-plain colored' />
					<span>Docker</span>
				</div>
			</div>
		</div>
	);
};

export default TechStacks;
