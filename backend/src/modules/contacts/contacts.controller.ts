import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtauthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Contacts')
@Controller('contact')
export class ContactsController {
  constructor(private contactService: ContactsService) {}

  @Post()
  @UseGuards(JwtauthGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateContactDto, @Request() req) {
    return this.contactService.create(data, req.user.id);
  }

  @Get()
  async findAll() {
    return await this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateContactDto) {
    return this.contactService.update(id, updateUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
