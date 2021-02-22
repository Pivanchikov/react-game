import pipeConfig from '../config/pipe'

class Pipes {
    constructor(props) {
        this.state ={
            pipeConfig
        }
        this.ctx = props;
        this.pipeDown = '';
    }
    drawPipes() {
        const Pipes = this.state.pipeConfig.pipes;
        for (let i = 0; i < Pipes.length; i++) {
        
        this.drawPipeDown(Pipes[i].x, Pipes[i].y)
        this.drawPipeUp(Pipes[i].x, Pipes[i].y+this.getGap())
        Pipes[i].x--

        if ( Pipes[i].x == Math.floor(window.innerWidth*.8) ) {
            Pipes.push({
            x: window.innerWidth,
            y: Math.floor(Math.random() * this.pipeDown.height) - this.pipeDown.height
            })
        }
        }
    }

    drawPipeDown(x, y) {
        this.pipeDown = new Image()
        this.pipeDown.src = this.state.pipeConfig.pipeDown
        this.ctx.drawImage(this.pipeDown, x, y)
    }

    drawPipeUp(x, y) {
        const pipeUp = new Image()
            pipeUp.src = this.state.pipeConfig.pipeUp
        this.ctx.drawImage(pipeUp, x, y)
    }

    getGap() {
        return this.pipeDown.height + this.state.pipeConfig.gap
    }
}

export default Pipes