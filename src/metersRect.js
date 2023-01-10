export default class MetersRect extends Phaser.GameObjects.Container {

    constructor(scene, x, y, iniMeters) {
        super(scene, x, y);
        this.meters = iniMeters;

        // Añadir a la escena
        this.scene.add.existing(this);

        // Crear rectángulo y texto
        this.rect = this.scene.add.rectangle(x, y, 140, 60, '#000000'); //.setStrokeStyle(10, '#d62215', 1);
        this.text = this.scene.add.text(x - 40, y - 15, this.meters + "M", {fontSize: 26, color: '#d62215', fontFamily: 'arcade_classic'})
    }
}