import gameConfig from '../config/game'

class Game {
    constructor(props) {
        this.state ={
            gameConfig
        }
        this.ctx = props
    }

    drawBg(){
        const Bg = new Image();
          Bg.src = this.state.gameConfig.background;
          Bg.onload = () => this.ctx.drawImage(Bg, 0, 0, window.innerWidth, window.innerHeight)
      }

}

export default Game