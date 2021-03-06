const sequelize = require('../config/connection');
const { User, Template} = require('../models');


const userData = require('./userData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedAll();
