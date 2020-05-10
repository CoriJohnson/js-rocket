var car = {
  make: 'VW',
  type: 'Polo',
  color: 'blue',
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
  turnOn: function () {
    this.isTurnedOn = true;
    console.log('Car turned on');
  },
  fly: function () {
    alert('fly!');
  },
  switchCar: function (state) {
    if (state == 'on') {
      this.isTurnedOn = true;
    } else {
      this.isTurnedOn = false;
    }
    alert('Car is turned on?' + this.isTurnedOn);
  }
  };
console.log('Hello there friends!');
