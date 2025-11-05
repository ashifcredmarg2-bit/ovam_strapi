 import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::blog.blog", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    console.log("✅ Custom controller triggered for documentId:", id);

    // Force populate every relation and component
    const blog = await strapi.entityService.findMany("api::blog.blog", {
  filters: { documentId: id } as any,
      populate: "*", // populate EVERYTHING — components, media, relations
    });

    if (!blog || blog.length === 0) {
      return ctx.notFound("Blog not found");
    }

    return { data: blog[0] };
  },

  async find(ctx) {
    const blogs = await strapi.entityService.findMany("api::blog.blog", {
      populate: "*",
    });

    return { data: blogs };
  },
}));
