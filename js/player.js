class Player {
  constructor() {
    this._init();

    this.sprite = "images/char-boy.png";
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(allowedKeys) {
    switch (allowedKeys) {
      case PLAYER_MOVEMENT.LEFT:
        this._moveLeft();
        break;
      case PLAYER_MOVEMENT.RIGHT:
        this._moveRight();
        break;
      case PLAYER_MOVEMENT.UP:
        this._moveUp();
        break;
      case PLAYER_MOVEMENT.DOWN:
        this._moveDown();
        break;

      default:
        break;
    }
  }

  _init() {
    this.x = 2 * BLOCK.DISTANCE_HORIZONTAL;
    this.y = getPositionFromMiddleOfBlock(5);
  }

  _moveLeft() {
    if (isInLeftBoundary(this.x)) {
      this.x = this.x - BLOCK.DISTANCE_HORIZONTAL;
    }
  }

  _moveRight() {
    if (isInRightBoundary(this.x)) {
      this.x = this.x + BLOCK.DISTANCE_HORIZONTAL;
    }
  }

  _moveUp() {
    if (isInTheWater(this.y)) {
      setTimeout(() => {
        this._init();
      }, 300);
    }

    if (isInTopBoundary(this.y)) {
      this.y = this.y - BLOCK.DISTANCE_VERTICAL;
    }
  }

  _moveDown() {
    if (isInBottomBoundary(this.y)) {
      this.y = this.y + BLOCK.DISTANCE_VERTICAL;
    }
  }
}
