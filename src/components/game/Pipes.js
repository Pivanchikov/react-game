import pipeConfig from '../../config/pipe'

class Pipes {
    constructor(props) {
        this.state ={
            pipeConfig
        }
        this.ctx = props;
        this.pipeDown = '';
        this.scor= 0
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
        this.score(Pipes[i].x)
        }
      
    }
    
      score(x) {
        if (x == 40) {
          this.scor++
        }
      }

    drawScore(x, y) {
    this.ctx.fillStyle = '#000'
    this.ctx.font = "20px verdana"
    this.ctx.fillText(`Score: ${this.scor}`, 40, window.innerHeight - 40)
    }

    drawPipeDown(x, y) {
        this.pipeDown = new Image()
        this.pipeDown.src = this.state.pipeConfig.pipeDown
        this.ctx.drawImage(this.pipeDown, x, y)
    }

    drawPipeUp(x, y) {
        const pipeUp = new Image()
            pipeUp.src = this.state.pipeConfig.pipeUp
        const height = window.innerHeight - y
        this.ctx.drawImage(pipeUp, x, y, 52, height)
    }

    getGap() {
        return this.pipeDown.height + this.state.pipeConfig.gap
    }
}

export default Pipes