class Polygon{
    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        let total = 0
        for (let i = 0; i < this.array.length; i++){
            total = total + this.array[i]
        }
        return total
    }

}

class Triangle extends Polygon{

    get isValid(){
        if(this.countSides !== 3){
            return false
        }
        else if (this.array[0] + this.array[1] < this.array[2]) {
            return false
        }
        else if (this.array[1] + this.array[2] < this.array[0]) {
            return false
        }
        else if (this.array[0] + this.array[2] < this.array[1]) {
            return false
        }
        else{
            return true
        }
    }
}


class Square extends Polygon{

    get isValid(){
        if(this.countSides !== 4){
            return false
        }
        else if(this.array[0] !== this.array[1] || this.array[1] !== this.array[2] || this.array[2] !== this.array[3]){
            return false
        }
        else{
            return true
        }
    }
    get area(){
        return this.array[0] * this.array[0]
    }
}






const triangle = new Triangle([2,1,3])
console.log(triangle.isValid)
