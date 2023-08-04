import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { ContactsRepository } from '../contact-repository';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt,
        phoneNumber: contact.phoneNumber,
        userId: contact.userId,
      },
    });

    return newContact;
  }
  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }
  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({
      where: { id },
    });
    return contact;
  }

  async update(data: UpdateContactDto, id: string): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });
    return contact;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
