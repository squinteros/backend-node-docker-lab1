import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  //let repo: Repository<User>;

  const mockUserRepository = {
    find: jest.fn().mockResolvedValue([{ id: 1, name: 'Test User' }]),
    findOne: jest.fn().mockResolvedValue(undefined),
    create: jest.fn().mockResolvedValue({ id: 1, name: 'Nuevo' }),
    save: jest
      .fn()
      .mockImplementation((user) => Promise.resolve({ id: 2, ...user })),
    findAndCount: jest.fn().mockResolvedValue([
      [{ id: 1, nombre: 'Test User', edad: 31 }], // entities
      1, // total
    ]),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository, // 👈 inyectamos el mock
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', async () => {
    const users = await service.findAll();
    expect(users).toEqual({
      data: [{ edad: 31, id: 1, nombre: 'Test User' }],
      limit: 10,
      page: 1,
      total: 1,
      totalPages: 1,
    });
    //expect(repo.findAndCount).toHaveBeenCalled();
  });

  it('should save a user', async () => {
    const newUser = await service.create({ nombre: 'Nuevo', edad: 31 });
    expect(newUser).toEqual({ id: 2 });
  });
});
