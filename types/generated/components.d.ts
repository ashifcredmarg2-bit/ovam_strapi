import type { Schema, Struct } from '@strapi/strapi';

export interface AurthorsAurthors extends Struct.ComponentSchema {
  collectionName: 'components_aurthors_aurthors';
  info: {
    displayName: 'Aurthors';
  };
  attributes: {
    Aurthors: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

export interface BlogSubheadingBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_subheading_blogs';
  info: {
    displayName: 'Subheading blog';
  };
  attributes: {};
}

export interface BlogimagesBlogImages extends Struct.ComponentSchema {
  collectionName: 'components_blogimages_blog_images';
  info: {
    displayName: 'Blog images';
  };
  attributes: {
    blogimages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ContentImageContentimage extends Struct.ComponentSchema {
  collectionName: 'components_content_image_contentimages';
  info: {
    displayName: 'contentimage';
  };
  attributes: {
    contentImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    Content: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 5000000000000;
      }>;
    Contentimages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CoverimagesCoverImages extends Struct.ComponentSchema {
  collectionName: 'components_coverimages_cover_images';
  info: {
    displayName: 'CoverImages';
  };
  attributes: {
    CoverImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PublishDatePublishDate extends Struct.ComponentSchema {
  collectionName: 'components_publish_date_publish_dates';
  info: {
    displayName: 'Publish_date';
  };
  attributes: {
    publish_date: Schema.Attribute.Date;
  };
}

export interface SubheadingSubheading extends Struct.ComponentSchema {
  collectionName: 'components_subheading_subheadings';
  info: {
    displayName: 'Subheading';
  };
  attributes: {
    subheading: Schema.Attribute.Text;
  };
}

export interface SuhheadingContentContent extends Struct.ComponentSchema {
  collectionName: 'components_suhheading_content_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aurthors.aurthors': AurthorsAurthors;
      'blog.subheading-blog': BlogSubheadingBlog;
      'blogimages.blog-images': BlogimagesBlogImages;
      'content-image.contentimage': ContentImageContentimage;
      'content.content': ContentContent;
      'coverimages.cover-images': CoverimagesCoverImages;
      'publish-date.publish-date': PublishDatePublishDate;
      'subheading.subheading': SubheadingSubheading;
      'suhheading-content.content': SuhheadingContentContent;
    }
  }
}
