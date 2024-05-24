import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Categories } from '../categories/entity/categories.entity';
import { ProductCategories } from '../categories/entity/productcategories.entity';
import { Customization } from '../products/entity/customization.entity';
import { Product } from '../products/entity/products.entity';
import { CartProduct } from '../shopping-cart/entity/cart-product.entity';
import { ShoppingCart } from '../shopping-cart/entity/shopping-cart.entity';
import { Sport } from '../sport/entity/sport.entity';
import { User } from '../users/entity/users.entity';
import * as env from '../config/enviroments';
import { Direction } from '../directions/entity/directions.entity';
import { UserProductFav } from '../users/entity/userproductfav.entity';
import { Order } from '../orders/entity/order.entity';
import { OrderProduct } from '../orders/entity/orderProduct.entity';
import { Review } from '../reviews/entity/reviews.entity';
import { Messages } from '../messages/entity/messages.entity';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      dialectModule: require('pg'),
      host: env.DPHOST,
      port: Number(env.DBPORT),
      username: env.DPUSERNAME,
      password: env.DPPASSWORD,
      database: env.DPDATABASE,
      models: [
        User,
        Product,
        Categories,
        ProductCategories,
        Sport,
        Customization,
        ShoppingCart,
        CartProduct,
        Direction,
        UserProductFav,
        Order,
        OrderProduct,
        Review,
        Messages,
      ],
      ssl: false,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      autoLoadModels: true,
      synchronize: true,
      logging: false,
      sync: { force: false },
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
