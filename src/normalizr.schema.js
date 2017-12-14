import { schema } from 'normalizr';

export const category = new schema.Entity('category');
export const categories = [category];

export const post = new schema.Entity('post');
export const posts = [post];

export const comment = new schema.Entity('comment');
export const comments = [comment];
