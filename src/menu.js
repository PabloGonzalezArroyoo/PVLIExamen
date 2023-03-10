export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  preload() {
	// Estrellas
	this.load.image('stars', 'assets/sprites/stars.png');

	// Música
	this.load.audio('menu', ['assets/sounds/menu.mp3']);
  }
 
  create(){
		// Añadir imagen
		this.add.image(this.game.config.width / 2, this.game.config.height / 4, 'stars').setScale(3.5, 3.5);

		// Añadir texto (con la fontFamily añadida porque no sé por qué no la coge del css)
		this.add.text(this.game.config.width / 2, this.game.config.height / 4, 'CIRCUS', {fontSize: 60, color: '#FFFFFF', fontFamily: 'arcade_classic'}).setOrigin(0.5, 0.5).setAlign('center');
		
		// Añadir botones
		this.createButton(this.game.config.height / 5 * 2.5, 'Easy', 50);
		this.createButton(this.game.config.height / 5 * 3, 'Normal', 100);
		this.createButton(this.game.config.height / 5 * 3.5, 'Hard', 200);

		// Reproducir música
		const musicConfig = {
			mute: false,
			volume: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
		}
		this.music = this.sound.add('menu');
    	this.music.play(musicConfig);
	}
	
	// Botones
	createButton(y, texto, num){
		// Crear
		let boton = this.add.text(this.game.config.width / 2, y, texto , {fontSize: 36, color: '#FFFFFF', fontFamily: 'arcade_classic'})
		.setOrigin(0.5, 0.5).setAlign('center')
		.setInteractive();
		
		// Al pulsar
		boton.on('pointerdown', ()=> {
			this.scene.start('Stage',{rec:num});
			this.music.stop();
		});

		return boton;
	}
}