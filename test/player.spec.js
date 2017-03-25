import { Player } from '../js/Player'
import { Game } from '../js/Game'
import { Direction } from '../js/Direction'
import { describe, it } from 'mocha'
import { expect } from 'chai'

describe('player', () => {
   describe('move functionalities', () => {

      it('should be in col 1 when move left given player is in col 2', () => {
         const player = new Player(Game.col(3), 0)
         const position = player.handleInput(Direction.LEFT)

         expect(position.x).to.equal(Game.col(2))
      })

      it('should be in col 3 when move right given player is in col 2', () => {
         const player = new Player(Game.col(2), 0)
         const position = player.handleInput(Direction.RIGHT)

         expect(position.x).to.equal(Game.col(3))
      })

      it('should be in row 2 when move up given player is in row 3', () => {
         const player = new Player(0, 166)
         const position = player.handleInput(Direction.UP)

         expect(position.y).to.equal(83)
      })

      it('should be in row 3 when move down given player is in row 2', () => {
         const player = new Player(0, 166)
         const position = player.handleInput(Direction.DOWN)

         expect(position.y).to.equal(249)
      })
   })

})