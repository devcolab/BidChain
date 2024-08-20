'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const now = new Date();

    const auctions = [
      {
        id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Buy',
        productId: '4f9dff8a-d10b-4d45-87e2-6e2b1caa3d5a',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9c0e75d8-3f92-4e35-8a7e-1f3b2c1a4f6b',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Buy',
        productId: 'd3e8e3be-017f-4b7f-93c7-4c0a0eafed31',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7e0a72f9-1c4f-45d7-8b8c-7e3d2f4b5a6c',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Buy',
        productId: 'e39e9c27-7a65-47be-92e6-4c8d3b9e8a2f',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4b8c91a3-6a7f-49c9-8d8e-7b5a3d1c2f4e',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Buy',
        productId: '6c0e5a0f-9d1f-4938-82c3-1e4a2f7b6e2d',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5d9b8e4f-1f7c-4e3a-8b7e-6a3d1c5e2f8a',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Buy',
        productId: 'a4f9a4e7-6e2d-4d7c-8a8b-0f9d6a4e7b1c',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8f7e5a3d-2c4b-4f6a-9d7b-3e1f5a6c7b2e',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Auction',
        productId: '8b5e4d2c-7f1d-4e3a-9a7b-6d2f1a3c5e8a',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3e4b6a2d-7c8f-4b1e-9a7b-6f2d3c5a1b7e',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Auction',
        productId: '9e3b8c4d-5a2f-4d7e-8a9b-7f2d1e6c4b8a',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6c7a5e4d-3f2b-4e8a-9b6e-1d7c2f5b4a8e',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Auction',
        productId: '7f2a3c1d-8e4f-4b6a-9d7e-2b1c3e5f6a8a',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1d9a7e6b-2f3c-4b8e-9f7d-5a6c1e3b2f4d',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Auction',
        productId: '3a5e7c4d-1f2b-4d6e-8a9f-5d2c7e3b1a4a',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2a7b5d8e-3c4f-4b1a-9e8f-7d6a2c3b1f5e',
        initialBid: 100,
        startDate: new Date(),
        endDate: new Date(now.getTime() + 1 * 60 * 1000),
        auctionType: 'Auction',
        productId: '6e8f9b4d-3c2f-4d7a-9e5b-1d7a3c5e2b8f',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Actions', auctions, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
