import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find({ where: { isActive: true } });
  }

  findOne(id: string) {
    return this.postRepository.findOneBy({ id });
  }

  async findOneBySlug(slug: string): Promise<Post> {
    const post = await this.postRepository.findOne({
      where: { slug, isActive: true },
    });

    if (!post) {
      throw new NotFoundException(`Post com slug "${slug}" não encontrado.`);
    }

    return post;
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: string) {
    return this.postRepository.delete(id);
  }
}
