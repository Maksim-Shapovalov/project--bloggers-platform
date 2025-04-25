import { Module } from '@nestjs/common';
import { UserAccountsService } from './user-accounts.service';
import { UserAccountsController } from './user-accounts.controller';

@Module({
  providers: [UserAccountsService],
  controllers: [UserAccountsController]
})
export class UserAccountsModule {}
