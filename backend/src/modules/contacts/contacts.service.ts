import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contact-repository';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactsRepository) {}
  async create(data: CreateContactDto, contactId: string) {
    return await this.contactRepository.create(data, contactId);
  }

  async findAll() {
    return await this.contactRepository.findAll();
  }

  async findOne(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findContact = await this.contactRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found');
    }

    return this.contactRepository.update(updateContactDto, id);
  }

  async remove(id: string) {
    const findContact = await this.contactRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found');
    }

    return this.contactRepository.delete(id);
  }
}
