import React,  { Component } from 'react'

import Bird from './Bird'
import Game from './Game'
import Pipes from './Pipes';

class CanvasCreator extends Component {

    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
        this.ctx = null;
        this.bird = '';
        this.game = '';
        this.pipes = '';
        this.req = ''
      }
    
    componentDidMount = () => {
      this.createCanvas()
      this.game.drawBg()
      this.bird.drawBird()
      
      this.canvasRef.current.addEventListener('click', () => {
        this.bird.fallBird()
        this.draw()
      })

      document.addEventListener('keydown', () => this.bird.upBird() )
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
                window.location.reload()
              }

        });
       
        }
      start()
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