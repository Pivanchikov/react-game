import React,  { Component } from 'react'

import Bird from './Bird'
import Game from './Game'
import Pipes from './Pipes';
import FinishGame from './FinishGame'

class CanvasCreator extends Component {

    constructor(props) {
        super(props);
        this.state = {
          toggle: false 
        }
        this.canvasRef = React.createRef();
        this.ctx = null;
        this.bird = '';
        this.game = '';
        this.pipes = '';
        this.req = ''
      }
    
    componentDidMount = () => {
      
      if (!this.state.toggle) {
        this.createCanvas()
      this.game.drawBg()
      this.bird.drawBird()
      
      this.canvasRef.current.addEventListener('click', () => {
        this.bird.fallBird()
        this.draw()
      })

      document.addEventListener('keydown', (event) => {
        if (event.keyCode === 32) {
          this.bird.upBird()
        }
      })
      }
    }

    createCanvas = () => {
      this.ctx = this.canvasRef.current.getContext('2d');
      let canvas = this.canvasRef.current
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

      this.bird = new Bird (this.ctx);
      this.game = new Game (this.ctx);
      this.pipes = new Pipes (this.ctx);
    }
  
    draw() {
      const birdsConfig = this.bird.state.birdConfig;
      const start = () => {
        this.game.drawBg()
        this.pipes.drawPipes(birdsConfig.y, this.req)
        this.pipes.drawScore()
        this.bird.drawBird()
        this.req = requestAnimationFrame(start) 

        this.pipes.state.pipeConfig.pipes.forEach(pipe => {
          if (
              birdsConfig.y + 40 >= window.innerHeight ||
              birdsConfig.y + 40 <= 0 ||
              pipe.x >= 0 && pipe.x <= 52 &&
             ( birdsConfig.y + 40 < pipe.y + 242 ||
               birdsConfig.y + 40 > pipe.y + 342)
              ){
                cancelAnimationFrame(this.req);
                this.setState({toggle: true})
                // window.location.reload()
              }

        });
        }
      start()
    }

    render() {
        return (
          this.state.toggle 
                ? <FinishGame score={this.pipes.scor} /> 
                : <canvas ref={this.canvasRef} />
        )
    }
        
    };

    export default CanvasCreator