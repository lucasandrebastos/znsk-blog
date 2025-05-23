import {
  Controller,
  Get,
  Post as HttpPost,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Controller('blog')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @HttpPost()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    console.log('findAll', new Date().toLocaleTimeString('en-US'));
    return this.postsService.findAll();
  }

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string): Promise<Post> {
    return this.postsService.findOneBySlug(slug);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
