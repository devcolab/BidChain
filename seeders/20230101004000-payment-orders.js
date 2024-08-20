'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const paymentOrders = [
      {
        id: "8f8d6b3f-e4fa-4bcc-9938-e3cd5c464d68",
        isPaid: 'true',
        tax: 15,
        subTotal: 20,
        total: 35,
        auctionId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "f16dca37-4518-4378-b6d5-0c16a0dc30a3"
      },
      {
        id: "182e004f-d37c-49b2-897a-dbf8601c08fd",
        isPaid: 'false',
        tax: 10,
        subTotal: 50,
        total: 60,
        auctionId: '9c0e75d8-3f92-4e35-8a7e-1f3b2c1a4f6b',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "f16dca37-4518-4378-b6d5-0c16a0dc30a3"
      },
      {
        id: "d0ab3ab0-f1b7-4994-be19-e3b1e108f9ac",
        isPaid: 'true',
        tax: 8,
        subTotal: 100,
        total: 108,
        auctionId: '7e0a72f9-1c4f-45d7-8b8c-7e3d2f4b5a6c',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "46e6e7b2-63d0-4bb3-b2c1-e3618d1f9f26"
      },
      {
        id: "62fa9f69-0845-4c90-b199-9caa2fff023f",
        isPaid: 'true',
        tax: 5,
        subTotal: 30,
        total: 35,
        auctionId: '4b8c91a3-6a7f-49c9-8d8e-7b5a3d1c2f4e',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "46e6e7b2-63d0-4bb3-b2c1-e3618d1f9f26"
      },
      {
        id: "ce18a91d-2552-4880-bd0a-016690e324fc",
        isPaid: 'false',
        tax: 20,
        subTotal: 200,
        total: 220,
        auctionId: '5d9b8e4f-1f7c-4e3a-8b7e-6a3d1c5e2f8a',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "cf7785f5-e8e4-4214-b6d7-8a525b826a49"
      },
      {
        id: "c006c9d5-3fb4-4f4c-9761-4fbbb10931d0",
        isPaid: 'false',
        tax: 12,
        subTotal: 80,
        total: 92,
        auctionId: '8f7e5a3d-2c4b-4f6a-9d7b-3e1f5a6c7b2e',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "cf7785f5-e8e4-4214-b6d7-8a525b826a49"
      },
      {
        id: "44e4d9ea-b5d6-49db-881c-f77fbb7d9b6f",
        isPaid: 'true',
        tax: 18,
        subTotal: 150,
        total: 168,
        auctionId: '3e4b6a2d-7c8f-4b1e-9a7b-6f2d3c5a1b7e',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "a9d66d46-ef97-4e80-b408-87f32e63e40b"
      },
      {
        id: "674aa048-bbd5-4abe-bfa4-51d3366f6a50",
        isPaid: 'false',
        tax: 7,
        subTotal: 40,
        total: 47,
        auctionId: '6c7a5e4d-3f2b-4e8a-9b6e-1d7c2f5b4a8e',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "a9d66d46-ef97-4e80-b408-87f32e63e40b"
      },
      {
        id: "eb4bb034-e795-4e65-aca3-f1942c5d24fe",
        isPaid: 'true',
        tax: 25,
        subTotal: 300,
        total: 325,
        auctionId: '1d9a7e6b-2f3c-4b8e-9f7d-5a6c1e3b2f4d',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "a9d66d46-ef97-4e80-b408-87f32e63e40b"
      },
      {
        id: "7538c639-3f8d-4f5b-86e1-ffbe075fb8bb",
        isPaid: 'false',
        tax: 10,
        subTotal: 60,
        total: 70,
        auctionId: '2a7b5d8e-3c4f-4b1a-9e8f-7d6a2c3b1f5e',
        createdAt: new Date(),
        updatedAt: new Date(),
        paidAt: new Date(),
        userId: "a9d66d46-ef97-4e80-b408-87f32e63e40b"
      },
    ];

    await queryInterface.bulkInsert('PaymentOrders', paymentOrders, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PaymentOrders', null, {});
  },
};
