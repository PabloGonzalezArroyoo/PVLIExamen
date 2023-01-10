export default class Fire extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y);

        // Animación
        this.scene.anims.create({
            key: 'idelFire',
            frames: this.scene.anims.generateFrameNames('fire', {start: 0, end: 1}),
            frameRate: 2,
            repeat: -1
        });

        // Añadir a la escena y físicas
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
    }
}