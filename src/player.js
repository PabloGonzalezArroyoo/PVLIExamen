export default class Player extends Phaser.GameObjects.Container {

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
        this.scene.physics.add.existing(this);

        // Cámara
        this.scene.cameras.main.startFollow(this, true, 1, 0, -352, 172);

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

        // Izquierda derecha
        if (this.cursorRIGHT.isDown) {
            console.log("hola1");
            this.body.setVelocityX(+this.speed);
            this.lion.play('lionWalk');
            this.player.setFrame(1);
        }
        else if (this.cursorLEFT.isDown) {
            console.log("hola2");
            this.body.setVelocityX(-this.speed);
            this.lion.play('lionWalk');
            this.player.setFrame(1);
        }
        else {
            this.body.setVelocityX(0);
            this.lion.anims.stop();
            this.lion.setFrame(1);
            this.player.setFrame(0);
        }

        
        // Saltar
        if (this.cursorUP.isDown && this.body.onFloor()) {
            this.body.setVelocityY(-this.speed * 5);
            this.lion.setFrame(0);
        }
        
    }
}