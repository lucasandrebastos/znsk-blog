import { IsString, IsArray, IsBoolean, IsDateString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  summary: string;

  @IsDateString()
  date: string;

  @IsString()
  slug: string;

  @IsString()
  content: string;

  @IsString()
  heroImage: string;

  @IsArray()
  tags: string[];

  @IsBoolean()
  isActive: boolean;
}
