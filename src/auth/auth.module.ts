import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientModule } from 'src/client/client.module';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  providers: [AuthService, LocalStrategy, SessionSerializer],
  controllers: [AuthController],
  imports: [ClientModule],
})
export class AuthModule {}
