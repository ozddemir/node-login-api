const obj = {
    name: 'Ali Veli',
    age: 35,
    sex: 'Male',
    birthdate:"1991"
  };

  const { name: username, ...rest } = obj;
  console.log(username)
  console.log(rest)