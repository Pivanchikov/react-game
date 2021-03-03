import pipeConfig from '../../config/pipe'
import birdConfig from '../../config/bird'

class Bird {
    constructor(props) {
        this.state ={
            birdConfig
        }
        this.ctx = props
    }

    drawBird = () => {
      console.log(this.state.birdConfig.bird)
        const Config = this.state.birdConfig;
        const Bird = new Image();
              Bird.src = this.state.birdConfig.bird;
              console.log(Bird.src)
              Bird.onload = () => this.ctx.drawImage(Bird, Config.x, Config.y)
    }
  
    fallBird = () =>{
      setInterval(()=> {
        this.state.birdConfig.y = this.state.birdConfig.y + pipeConfig.speed
      }, 20)
    }
  
    upBird = () =>{
      this.state.birdConfig.y = this.state.birdConfig.y - 40
    }
}

export default Bird