import React,  { Component } from 'react'

import birdConfig from '../config/bird'
import gameConfig from '../config/game'

class CanvasCreator extends Component {

    constructor(props) {
        super(props);

        this.state = {
         birdConfig,
         gameConfig
        };

        this.canvasRef = React.createRef();
        this.ctx = null;
      }
    
    componentDidMount = () => {
      this.createCanvas()
      this.flyBird();

      this.canvasRef.current.addEventListener('click', () => this.fallBird())
      document.addEventListener('keydown', () => this.upBird() )

    }

    createCanvas = () => {
      this.ctx = this.canvasRef.current.getContext('2d');
      let canvas = this.canvasRef.current
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      this.ctx.imageSmoothingEnabled = false;
      this.ctx.mozImageSmoothingEnabled = false;
      this.ctx.webkitImageSmoothingEnabled = false;
      this.ctx.msImageSmoothingEnabled = false;
      this.ctx.imageSmoothingEnabled = false;
    }
  
   drawBird(){
      const Config = this.state.birdConfig;
      const Bird = new Image();
        Bird.src = Config.imageFirst;
        Bird.onload = () => this.ctx.drawImage(Bird, Config.x, Config.y)

     setTimeout(() => {
        Bird.src = Config.imageSecond;
        Bird.onload = () => this.ctx.drawImage(Bird, Config.x, Config.y)
      }, 0)
       setTimeout(() => {
        Bird.src = Config.imageThird;
      Bird.onload = () => this.ctx.drawImage(Bird, Config.x, Config.y)
      }, 5)
  }

  flyBird(){
    setInterval(()=> {
      this.drawBird()
    }, 20)
  }
  fallBird(){
    setInterval(()=> {
      this.state.birdConfig.y = this.state.birdConfig.y + 3
      this.drawBird()
      this.ctx.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height)

    }, 20)
  }

  upBird(){
    this.state.birdConfig.y = this.state.birdConfig.y - 60
  }
    render() {
        return (
                <canvas
                    ref={this.canvasRef} 
                />
        )
    }
        
    };

    export default CanvasCreator