"use strict";

class ToneJS {

    sound_path = 'sounds/';

    constructor(file = false) {
        if(file === false) return false;
        this.play(file);
    }

    playfile(file) {
        let audio = new Audio(file);

        try {
            audio.play();
        } catch (event) {
            if (event.name == 'NotAllowedError') {
                console.log('Please Allow Playing Audio in your browser');
            } else if (event.name == 'NotSupportedError') {
                console.log('Opps! Your browser doesn\'t support autoplay');
            }
        }
    }

    play( file = false ){
        if(file === false) return false;
        this.playfile(this.sound_path + file + '.mp3');
    }

    developer() {
        return {
            Developer: 'Jafran Hasan',
            Facebook: 'https://facebook.com/iamjafran',
            Designation: 'Software Engineer',
            Email: 'jafraaan@gmail.com'
        };
    }
 
    button() {
        this.playfile(this.sound_path + 'button.mp3');
    }

    keypress() {
        this.playfile(this.sound_path + 'keypress.mp3');
    }

}

const Tone = new ToneJS();