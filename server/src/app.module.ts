import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from './auth/auth.module';
import { VendorsModule } from './vendors/vendors.module';
import { EventsModule } from './events/events.module';
import { RecurrenceRulesModule } from './recurrence_rules/recurrence_rules.module';
import { TicketTypesModule } from './ticket_types/ticket_types.module';
import { VenuesModule } from './venues/venues.module';
import { UserRegistrationsModule } from './user_registrations/user_registrations.module';
import { UserWishlistsModule } from './user_wishlists/user_wishlists.module';
import { PaymentsModule } from './payments/payments.module';
import { UserTicketsModule } from './user_tickets/user_tickets.module';
import { PaymentRefundsModule } from './payment_refunds/payment_refunds.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RevenueAnalyticsModule } from './revenue_analytics/revenue_analytics.module';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => {
        const isProduction = ConfigService.get('NODE_ENV') === 'production';
        return {
          pinoHttp: {
            transport: isProduction
              ? undefined
              : {
                  target: 'pino-pretty',
                  options: {
                    singleLine: true,
                  },
                },
            level: isProduction ? 'info' : 'debug',
          },
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    VendorsModule,
    EventsModule,
    RecurrenceRulesModule,
    TicketTypesModule,
    VenuesModule,
    UserRegistrationsModule,
    UserWishlistsModule,
    PaymentsModule,
    UserTicketsModule,
    PaymentRefundsModule,
    ReviewsModule,
    RevenueAnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
