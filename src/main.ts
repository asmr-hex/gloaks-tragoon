import * as Phaser from 'phaser';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Gloaks Tragoon',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },

    parent: 'game',
    backgroundColor: '#b6fcd5',

    input: {
        gamepad: true,
    },

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

export const game = new Phaser.Game(gameConfig);

let text
let player

function preload() {
    this.load.image('robot', 'assets/robot.jpeg')
    // this.load.spritesheet('baby',
    //     'assets/baby.png',
    //     { frameWidth: 320, frameHeight: 160 }
    // )
    // this.load.audio("baby", ["assets/baby.ogg"])
}

function create() {
    // this.ron = { velocity: { x: 1, y: 1 }, speed: 20, x: 0, y: 0 }
    this.add.image(0, 0, 'robot').setOrigin(0)
    text = this.add.text(300, 50, 'robot society', { font: '16px Courier', fill: '#fca7fa' })

    // player = this.physics.add.sprite(100, 450, 'baby')
    // player.setCollideWorldBounds(true)

    // this.anims.create({
    //     key: 'right',
    //     frames: this.anims.generateFrameNumbers('baby', { start: 0, end: 2 }),
    //     frameRate: 10,
    //     repeat: -1
    // })

    // this.anims.create({
    //     key: 'left',
    //     frames: this.anims.generateFrameNumbers('baby', { start: 3, end: 5 }),
    //     frameRate: 10,
    //     repeat: -1
    // })

    // this.babygoo = this.sound.add("baby")
    // this.babygooing = false
}

function update() {
    let cursors = this.input.keyboard.createCursorKeys()

    if (cursors.left.isDown) {
    }
    else if (cursors.right.isDown) {
    }
}
