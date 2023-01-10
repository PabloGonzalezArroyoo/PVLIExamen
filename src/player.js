export default class Player extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y);
        // Añadir elementos
        this.player = this.scene.add.sprite(scene, x, y, 'clown').setScale(3, 3);
        this.lion = this.scene.add.sprite(scene, x - 10, y + 60, 'lion').setScale(3, 3);
        this.setSize(this.lion.width, this.player.height + this.lion.height)
        this.add(this.player);
        this.add(this.lion);

        // Añadir a la escena y físicas
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

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
        this.player.preUpdate(t, dt);
        this.lion.preUpdate(t, dt);

        if (this.cursorRIGHT.isDown) {
            console.log("hola1");
            this.body.setVelocityX(+this.speed);
            this.lion.play('lionWalk');
            this.player.setFrame(1);
        }
        else if (this.cursorLEFT.isDown) {
            console.log("hola2");
            this.body.setVelocityX(-this.speed);
        }
    }
}