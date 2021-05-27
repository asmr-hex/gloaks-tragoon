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
    this.load.spritesheet('snob',
        'assets/s_spritesheet.png',
        { frameWidth: 120, frameHeight: 120 }
    )
    // this.load.audio("baby", ["assets/baby.ogg"])
}

function create() {
    // this.ron = { velocity: { x: 1, y: 1 }, speed: 20, x: 0, y: 0 }
    this.add.image(0, 0, 'robot').setOrigin(0)
    text = this.add.text(300, 50, 'robot society', { font: '16px Courier', fill: '#fca7fa' })

    player = this.physics.add.sprite(100, 450, 'snob')
    player.setCollideWorldBounds(true)

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('snob', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    })

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('snob', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1
    })

    // this.babygoo = this.sound.add("baby")
    // this.babygooing = false
}

function update() {
    let cursors = this.input.keyboard.createCursorKeys()
    const speed = 80

    if (cursors.left.isDown) {
        player.setVelocityX(-speed)
        player.anims.play('left', true)
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(speed)
        player.anims.play('right', true)
    } else {
        player.setVelocityX(0)
        player.anims.stop()
    }
}
