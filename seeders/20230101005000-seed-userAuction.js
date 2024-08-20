'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const userAuction = [
      {
        id: '5e1d683f-ac4b-4960-92c1-44aeca8c5f13',
        userId: '46e6e7b2-63d0-4bb3-b2c1-e3618d1f9f26',
        valueBid: 100,
        hourBid: new Date(),
        auctionId: "8f7e5a3d-2c4b-4f6a-9d7b-3e1f5a6c7b2e",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd9918094-e601-4194-803d-550ea04f14f4',
        userId: 'cf7785f5-e8e4-4214-b6d7-8a525b826a49',
        valueBid: 200,
        hourBid: new Date(),
        auctionId: "3e4b6a2d-7c8f-4b1e-9a7b-6f2d3c5a1b7e",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '11918bb5-0057-4eda-bc7e-d137868d7295',
        userId: 'a9d66d46-ef97-4e80-b408-87f32e63e40b',
        valueBid: 300,
        hourBid: new Date(),
        auctionId: "6c7a5e4d-3f2b-4e8a-9b6e-1d7c2f5b4a8e",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2754a6d7-0e66-4c3c-8e9e-5de9ff23819a',
        userId: 'cf7785f5-e8e4-4214-b6d7-8a525b826a49',
        valueBid: 400,
        hourBid: new Date(),
        auctionId: "1d9a7e6b-2f3c-4b8e-9f7d-5a6c1e3b2f4d",
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 'f8d2e5d3-2f9d-4a1d-9b8c-3d6f8c2d1b6d',
        userId: '46e6e7b2-63d0-4bb3-b2c1-e3618d1f9f26',
        valueBid: 500,
        hourBid: new Date(),
        auctionId: "2a7b5d8e-3c4f-4b1a-9e8f-7d6a2c3b1f5e",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   id: '01a19f38-98b7-4023-8c29-d499ff24c1f7',
      //   userId: 'a9d66d46-ef97-4e80-b408-87f32e63e40b',
      //   valueBid: 600,
      //   hourBid: new Date(),
      //   auctionId: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   id: '6baca9cd-c6ba-4949-82f9-cf71f2eb9813',
      //   userId: 'a9d66d46-ef97-4e80-b408-87f32e63e40b',
      //   valueBid: 700,
      //   hourBid: new Date(),
      //   auctionId: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   id: 'ca8bf805-c9dd-4271-ade7-064ec76bb8bb',
      //   userId: 'f16dca37-4518-4378-b6d5-0c16a0dc30a3',
      //   valueBid: 800,
      //   hourBid: new Date(),
      //   auctionId: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   id: '9c890cff-59c8-467d-9f77-546871141938',
      //   userId: 'f16dca37-4518-4378-b6d5-0c16a0dc30a3',
      //   valueBid: 900,
      //   hourBid: new Date(),
      //   auctionId: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   id: '026906bc-e77d-4043-9258-1c873641951a',
      //   userId: 'f16dca37-4518-4378-b6d5-0c16a0dc30a3,
      //   valueBid: 1000,
      //   hourBid: new Date(),
      //   auctionId: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }

    ];

    await queryInterface.bulkInsert('UserAuction', userAuction, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
