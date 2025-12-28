//solved
let x = -121;
let r=x;
let newValue = 0;
let reminder = 0;
let reversvalue = 0;

while (0 < x) {
    newValue = x % 10;
    reminder =Math.floor (x / 10)
    reversvalue = reversvalue * 10 + newValue;
    x = reminder;
}

if (reversvalue == r) {
    return true;

}
else {
   return false;
}