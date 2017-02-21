let name = "Luc";
console.log(name);


let arr = [1, 2, 3];
let a = arr[0];
console.log(`Value of a ${a}`);
a = 5;
console.log(`Value of first element of array ${arr[0]}`);

function hello() {
  console.log("Hello");
}

hello();

const newHello = () => {
 console.log("New Hello");
};

newHello();


const fetchUsers = () => { 
  return new Promise((resolve, reject) => {
    let users = [{name: 'Luc', email: 'luc@ltv.vn'}];
    users = [];
    setTimeout(() => {
      //console.log(users);
      if (users.length > 0) {
        resolve(users);
      } else {
        reject(new Error(`There is no users`));
      }
    }, 1000);
  });
};

fetchUsers()
  .then((users) => {
    console.log(`users: `, users);
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log('fetchUsers');

