import gameConfig from '../../config/game'


class Ground {
    constructor( ctx ) {
        this.state ={
            gameConfig,
            ctx
        }
        
    }
    
    drawGround(){
        let height = window.innerHeight * 0.15
        const Bg = new Image();
          Bg.src = this.state.gameConfig.ground;
          Bg.onload = () => this.state.ctx.drawImage(Bg, 0, window.innerHeight - height, window.innerWidth, height)
      }

}

export default Ground