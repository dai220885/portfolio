import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import mainAvatar from '../assets/images/Main-avatar.png'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles';
import { Fade } from "react-awesome-reveal";
import telegramIcon from '../assets/images/footer/telegram_white.svg';
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'
import {inspect} from 'util';
const particlesOpt = {
	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 800,
			}
		}
	}
}
const particlesOpt5 = {
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: 'push',
			},
			onHover: {
				enable: true,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			bubble: {
				distance: 400,
				duration: 2,
				opacity: 0.8,
				size: 40,
			},
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},

	particles: {
		color: {
			value: '#ffffff',
		},
		links: {
			color: '#ffffff',
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			//     direction: "none",
			enable: true,
			//     outMode: "bounce",
			random: true,
			speed: 6,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				value_area: 800,
			},
			value: 80,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: 'circle',
		},
		size: {
			random: true,
			value: 5,
		},
	}
}
const particlesOpt2 = {
	'fullScreen': {
		'enable': true,
		'zIndex': 1
	},
	'particles': {
		'number': {
			'value': 10,
			'density': {
				'enable': false,
				'value_area': 800
			}
		},
		'color': {
			'value': '#fff'
		},
		'shape': {
			'type': 'star',
			'options': {
				'sides': 5
			}
		},
		'opacity': {
			'value': 0.8,
			'random': false,
			'anim': {
				'enable': false,
				'speed': 1,
				'opacity_min': 0.1,
				'sync': false
			}
		},
		'size': {
			'value': 4,
			'random': false,
			'anim': {
				'enable': false,
				'speed': 40,
				'size_min': 0.1,
				'sync': false
			}
		},
		'rotate': {
			'value': 0,
			'random': true,
			'direction': 'clockwise',
			'animation': {
				'enable': true,
				'speed': 5,
				'sync': false
			}
		},
		'line_linked': {
			'enable': true,
			'distance': 600,
			'color': '#ffffff',
			'opacity': 0.4,
			'width': 2
		},
		'move': {
			'enable': true,
			'speed': 2,
			'direction': 'none',
			'random': false,
			'straight': false,
			'out_mode': 'out',
			'attract': {
				'enable': false,
				'rotateX': 600,
				'rotateY': 1200
			}
		}
	},
	'interactivity': {
		'events': {
			'onhover': {
				'enable': true,
				'mode': ['grab']
			},
			'onclick': {
				'enable': false,
				'mode': 'bubble'
			},
			'resize': true
		},
		'modes': {
			'grab': {
				'distance': 400,
				'line_linked': {
					'opacity': 1
				}
			},
			'bubble': {
				'distance': 400,
				'size': 40,
				'duration': 2,
				'opacity': 8,
				'speed': 3
			},
			'repulse': {
				'distance': 200
			},
			'push': {
				'particles_nb': 4
			},
			'remove': {
				'particles_nb': 2
			}
		}
	},
	'retina_detect': true,
	'background': {
		'color': '#111',
		'image': '',
		'position': '50% 50%',
		'repeat': 'no-repeat',
		'size': 'cover'
	}
}
const particlesOpt3 = {
	'particles': {
		'number': {
			'value': 10,
			'density': {
				'enable': false,
				'value_area': 800
			}
		},
		'color': {
			'value': '#fff'
		},
		'shape': {
			'type': 'star',
			'options': {
				'sides': 5
			}
		},
		'opacity': {
			'value': 0.8,
			'random': false,
			'anim': {
				'enable': false,
				'speed': 1,
				'opacity_min': 0.1,
				'sync': false
			}
		},
		'size': {
			'value': 4,
			'random': false,
			'anim': {
				'enable': false,
				'speed': 40,
				'size_min': 0.1,
				'sync': false
			}
		},
		'rotate': {
			'value': 0,
			'random': true,
			'direction': 'clockwise',
			'animation': {
				'enable': true,
				'speed': 5,
				'sync': false
			}
		},
		'line_linked': {
			'enable': true,
			'distance': 600,
			'color': '#ffffff',
			'opacity': 0.4,
			'width': 2
		},
		'move': {
			'enable': true,
			'speed': 2,
			'direction': 'none',
			'random': false,
			'straight': false,
			'out_mode': 'out',
			'attract': {
				'enable': false,
				'rotateX': 600,
				'rotateY': 1200
			}
		}
	},
}
const particlesOpt4 = {
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: 'push',
			},
			onHover: {
				enable: true,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			bubble: {
				distance: 400,
				duration: 2,
				opacity: 0.8,
				size: 40,
			},
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: '#ffffff',
		},
		links: {
			color: '#ffffff',
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: 'none',
			enable: true,
			outMode: 'bounce',
			random: false,
			speed: 6,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				value_area: 800,
			},
			value: 80,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: 'circle',
		},
		size: {
			random: true,
			value: 5,
		},
	},
};
const tiloOptions = {
	max: 15,
	speed: 100,
	transition: true,
	scale: 1}

const particlesInit = async (main: any) => {
	console.log(main);

	// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
	// starting from v2 you can add only the features you need reducing the bundle size
	await loadFull(main);
};

export const Main = () => {
	return (
		<div id = 'main' className={style.mainBlock}>
			{/*<Particles className={style.particles} params={particlesOpt}/>*/}
			{/*<Particles className={style.particles} params={particlesOpt}/>*/}
				<div className={styleContainer.container}>
						<Particles id="particles-here" init={particlesInit} options={particlesOpt5}/>
					<Fade >
					{/*<h1> I am a cool man</h1>*/}
					<div className={style.text}>
						<span>Hi</span>
						<span> I am Alexandr <span>Dylevich</span></span>
						<span><ReactTypingEffect
							text={'frontend developer'}
							speed={100}
							typingDelay={700}/></span>
						{/*<h1>frontend developer</h1>*/}
					</div>
						<Tilt options={tiloOptions}>
							<div className={style.imgContainer}>
								<div className={style.photo} style={{backgroundImage: `url(${mainAvatar})`}}>
								</div>
							</div>
						</Tilt>
					</Fade>
				</div>
		</div>
	);
}

