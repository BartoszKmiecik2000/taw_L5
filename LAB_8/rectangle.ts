export class Point {
    private x: number;
    private y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public move(moveX: number, moveY: number) {
        this.x += moveX;
        this.y += moveY;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
}

class Rectangle {
    private p1: Point;
    private p2: Point;
    private p3: Point;
    private p4: Point;

    public constructor(p1: Point, p2: Point, p3: Point, p4: Point) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
    }

    public move(moveX: number, moveY: number) {
        this.p1.move(moveX, moveY);
        this.p2.move(moveX, moveY);
        this.p3.move(moveX, moveY);
        this.p4.move(moveX, moveY);
    }

    public getArea(): number {
        let a: any = this.p1.getX;
        let b: any = this.p4.getX;
        let width: any = Math.abs(a - b);

        let x: any = this.p1.getY;
        let y: any = this.p2.getY;
        let height: any = Math.abs(x - y);

        return width * height;
    }
}
