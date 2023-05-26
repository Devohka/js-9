// завдяння 1

const one1 = [1, 2, 3];
one1.push(4, 5, 6);
console.log(one1)

// завдяння 2

const one2 = [1, 2, 3];
one2.unshift(4, 5, 6);
console.log(one2);

// завдяння 3

const tree = ['js', 'css', 'jq'];
console.log(tree.slice(0, 1));

// завдяння 4

const tree1 = ["js", "css", "jq"];
console.log(tree1.slice(2, 3));

// завдяння 5-6

const colection = [ ];
const card = [1, 2, 3];
const indexToAdd0 = colection.indexOf([1, 2, 3]);
colection.splice(indexToAdd0, 0, card);
console.log(colection)

const arr1 = [ ];
const car = [4, 5];
const indexToAdd1 = arr1.indexOf([4, 5]);
colection.splice(indexToAdd1, 0, car);

// завдяння 7-8-9

const fruit = [" apple", " banana", " mandarin"];
const deleting = " apple";
const index = fruit.indexOf(deleting);
fruit.splice(index, 1);
fruit.splice(1, 1);
const deleting1 = fruit.indexOf(" banana");
fruit.splice(deleting1, 0, " orange", " pineapple");
const arr = ["Eat", " plenty of fruit", " for example "];
const sum = arr + fruit;
console.log(sum);

// завдяння 10

const music = ["Джаз", 'Блюз'];
music.push("Рок-н-ролл");
const cardToud = "Блюз";
const indexUd = music.indexOf("Блюз");
music.splice(indexUd, 1, "Класика");
const delet = "Джаз";
const indexx = music.indexOf("delet");
music.splice(index, 1);
music.unshift("Реп");
console.log(music);