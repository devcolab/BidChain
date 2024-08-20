import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-transaction.dto';
import { UpdateAuctionDto } from './dto/update-transaction.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator/auth-user-decorator';
import { IGetUser } from 'src/auth/interfaces/getUser.interface';

@Controller('auctions')
@ApiTags('auctions')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new auction' })
  @ApiBody({
    description: 'Create a new auction',
    schema: {
      example: {
        initialBid: 1000.5,
        startDate: '2024-06-01T00:00:00Z',
        endDate: '2024-06-10T00:00:00Z',
        auctionType: [
          'traditional auctions',
          'direct purchase',
          'judicial auctions',
        ],
        productId: '004dd695-7b9f-4315-a65e-4595f60da51a',
        // paymentOrderId: '15475d76-bf2e-43db-b537-5094ea408651',
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Return a new auction.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(JwtAuthGuard)
  create(
    @GetUser() { userId }: IGetUser,
    @Body() createauctionDto: CreateAuctionDto,
  ) {
    return this.auctionService.create(createauctionDto, userId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all auctions' })
  @ApiResponse({ status: 200, description: 'Return all auctions.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.auctionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get auction by ID' })
  @ApiResponse({ status: 200, description: 'Return auction.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.auctionService.findOne(id);
  }

  @Get('user')
  @ApiOperation({ summary: 'Get all auctions by user' })
  @ApiResponse({ status: 200, description: 'Return all auctions by user.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(JwtAuthGuard)
  findAllByUser(@GetUser() { userId }: IGetUser) {
    return this.auctionService.findByUserId(userId);
  }

  @Put(':id')
  @ApiBody({
    description: 'Update auction',
    schema: {
      example: {
        initialBid: 1000.5,
        startDate: '2024-06-01T00:00:00Z',
        endDate: '2024-06-10T00:00:00Z',
        auctionType: [
          'traditional auctions',
          'direct purchase',
          'judicial auctions',
        ],
        productId: '004dd695-7b9f-4315-a65e-4595f60da51a',
        // paymentOrderId: '15475d76-bf2e-43db-b537-5094ea408651',
      },
    },
  })
  @ApiOperation({ summary: 'Update an existing auction' })
  @ApiResponse({ status: 200, description: 'Returns the updated auction.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(
    @Param('id') id: string,
    @Body() updateAuctionDto: UpdateAuctionDto,
  ) {
    return this.auctionService.update(id, updateAuctionDto);
  }

  @Patch(':id')
  @ApiBody({
    description: 'Partial upgrade auction',
    schema: {
      example: {
        initialBid: 1000.5,
        startDate: '2024-06-01T00:00:00Z',
        endDate: '2024-06-10T00:00:00Z',
        auctionType: [
          'traditional auctions',
          'direct purchase',
          'judicial auctions',
        ],
        productId: '004dd695-7b9f-4315-a65e-4595f60da51a',
        // paymentOrderId: '15475d76-bf2e-43db-b537-5094ea408651',
      },
    },
  })
  @ApiOperation({ summary: 'Partially update an existing auction' })
  @ApiResponse({
    status: 200,
    description: 'Returns the partially updated auction.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  partialUpdate(
    @Param('id') id: string,
    @Body() updateAuctionDto: UpdateAuctionDto,
  ) {
    return this.auctionService.partialUpdate(id, updateAuctionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove an auction' })
  @ApiResponse({
    status: 200,
    description: 'The auction has been successfully removed.',
  })
  @ApiResponse({ status: 404, description: 'Auction not found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('id') id: string) {
    return this.auctionService.remove(id);
  }
}
