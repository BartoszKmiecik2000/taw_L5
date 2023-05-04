"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(moveX, moveY) {
        this.x += moveX;
        this.y += moveY;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(p1, p2, p3, p4) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
    }
    move(moveX, moveY) {
        this.p1.move(moveX, moveY);
        this.p2.move(moveX, moveY);
        this.p3.move(moveX, moveY);
        this.p4.move(moveX, moveY);
    }
    getArea() {
        let a = this.p1.getX;
        let b = this.p4.getX;
        let width = Math.abs(a - b);
        let x = this.p1.getY;
        let y = this.p2.getY;
        let height = Math.abs(x - y);
        return width * height;
    }
}
