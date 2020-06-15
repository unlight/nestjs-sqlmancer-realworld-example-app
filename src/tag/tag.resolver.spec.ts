import { Assert } from 'zora';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';
import { mock, when, instance } from 'strong-mock';

export default (t: Assert) => {
    const tagService = mock<TagService>();

    t.test('tags', async (t: Assert) => {
        when(tagService.findAll()).thenResolve(['tag1']);
        const tagResolver = new TagResolver(instance(tagService));
        t.equal(await tagResolver.tags(), ['tag1']);
    });
};
