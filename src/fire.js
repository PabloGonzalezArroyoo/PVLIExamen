export default class Fire extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y);
        // Añadir elementos
        this.player = new Phaser.GameObjects.Sprite(scene, 0, -20, 'clown').setScale(3, 3);
        this.lion = new Phaser.GameObjects.Sprite(scene, 0, 40, 'lion').setScale(3, 3);
        console.log(this.lion.width);
        this.setSize(this.lion.width * 3, this.player.height * 3 + this.lion.height * 3);
        this.add(this.player);
        this.add(this.lion);

        // Añadir a la escena y físicas
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);

        // Controles
        this.cursorRIGHT = this.scene.input.keyboard.addKey('RIGHT');
		this.cursorLEFT = this.scene.input.keyboard.addKey('LEFT');
        this.cursorUP = this.scene.input.keyboard.addKey('UP');

        // Animaciones
        this.scene.anims.create({
            key: 'lionWalk',
            frames: this.scene.anims.generateFrameNames('lion', {start: 1, end: 2}),
            frameRate: 2,
            repeat: -1
        })

        // Variables extra
        this.speed = 100;
    }

    preUpdate(t, dt) {
        this.body.setVelocityX(-20);
        
    }
}