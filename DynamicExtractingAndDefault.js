const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address:{
      city: 'Gotham',
    }
  };
  const prop = 'city'; // If 'prop' is not "name", then it will take Joker as default
  const {address: {[prop]: cityName}} = hero;
  console.log(cityName);