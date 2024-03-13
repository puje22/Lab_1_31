class Room {
  constructor(roomNumber, roomSize, price) {
    this.roomNumber = roomNumber;
    this.roomSize = roomSize;
    this.price = price;
  }
  roomInfo() {
    // console.log(`Өрөөний дугаар: ${this.roomNumber}`);
    // console.log(`Өрөөний хэмжээ: ${this.roomSize}`);
    // console.log(`Өрөөний үнэ: ${this.price}`);
    return this;
    // console.log(this);
  }
  changeRoomSize(newSize) {
    this.roomSize = newSize;
    console.log(
      `${this.roomNumber} дугаартай өрөөний хэмжээ: ${this.roomSize} болж өөрчлөгдлөө`
    );
  }
}

let room = new Room(101, "Том", 150000);
// let room1 = new Room(102, "Jijig", 10000);

room.roomInfo();
room.changeRoomSize("Жижиг");
room.roomInfo();
// room1.roomInfo();
