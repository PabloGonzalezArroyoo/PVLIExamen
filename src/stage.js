import MetersRect from "./metersRect.js";
import Player from "./player.js";

export default class Stage extends Phaser.Scene {

    constructor() {
        super({key: 'Stage'});
        this.meters;
    }

    init(data) {
        this.meters = data.rec;
    }

    preload() {
        // Fondos
        this.load.image('bg1', 'assets/sprites/background.png');
        this.load.image('bg2', 'assets/sprites/background2.png');

        // Personaje
        this.load.spritesheet('clown', 'assets/sprites/clown.png', {frameWidth: 16, frameHeight: 24});
        this.load.spritesheet('lion', 'assets/sprites/lion.png', {frameWidth: 36, frameHeight: 16});

        // Obstáculos
        this.load.spritesheet('ring', 'assets/sprites/ring.png', {frameWidth: 26, frameHeight: 80});
        this.load.spritesheet('fire', 'assets/sprites/fire.png', {frameWidth: 25, frameHeight: 31});
        this.load.image('platform', 'assets/sprites/platform.png');

        // Música
        this.load.audio('stage', ['assets/sounds/stage.mp3']);
    }

    create() {
        const width = this.game.config.width;
        const height = this.game.config.height;

        // Fondo
        let distanceBg = 800;
        this.bgs = [];
        for (let i = 0; i < 3; i++) {
            this.bgs[i] = this.add.image(0 + distanceBg * i, 180, 'bg1').setOrigin(0, 0);
        }

        // Rectángulo metros
        let distanceRect = width - 250;
        for (let i = 0; i < this.meters / 10; i++) {
            new MetersRect(this, 120 + distanceRect * i, height - 40, this.meters - 10 * i);
        }

        // Jugador (león y payaso)
        this.player = new Player(this, 160, height - 200);

        // Reproducir música
		const musicConfig = {
			mute: false,
			volume: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
		}
		this.music = this.sound.add('stage');
    	this.music.play(musicConfig);
    }
}