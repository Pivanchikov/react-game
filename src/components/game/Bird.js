import birdConfig from '../../config/bird'

class Bird {
    constructor(props) {
        this.state ={
            birdConfig
        }
        this.ctx = props
    }

    drawBird = (src = this.state.birdConfig.imageFirst) => {
        const Config = this.state.birdConfig;
        const Bird = new Image();
              Bird.src = src;
              Bird.onload = () => this.ctx.drawImage(Bird, Config.x, Config.y)
    }
  
    fallBird = () =>{
      setInterval(()=> {
        this.state.birdConfig.y = this.state.birdConfig.y + 1.5
      }, 20)
    }
  
    upBird = () =>{
      this.state.birdConfig.y = this.state.birdConfig.y - 40
    }
}

export default Bird