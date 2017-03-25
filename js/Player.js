import Resources from './resources'
import { Game } from './Game'

export class Player {
   constructor(x, y) {
      this.x = x
      this.y = y
      this.sprite = 'images/char-boy.png'
   }

   update() {

   }

   render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
   }

   handleInput(movement) {
      if (movement === 'left') {
         this.x -= Game.CELL_WIDTH
      }

      return this
   }
}