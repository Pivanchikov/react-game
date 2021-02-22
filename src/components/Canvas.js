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

      const start = () => {
        this.game.drawBg()
        this.pipes.drawPipes()
        this.bird.drawBird()
        requestAnimationFrame(start)
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