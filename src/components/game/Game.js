import gameConfig from '../../config/game'


class Game {
    constructor( ctx ) {
        this.state ={
            gameConfig,
            ctx
        }
        
    }
    
    drawBg(){
        const Bg = new Image();
          Bg.src = this.state.gameConfig.background;
          Bg.onload = () => this.state.ctx.drawImage(Bg, 0, 0, window.innerWidth, window.innerHeight)
      }

}

export default Game