module Jekyll
  class LastModifiedAtTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
        site_source  = context.registers[:site].source
        article_file = context.environments.first["page"]["path"]

        File.mtime(article_file)
      end
  end
end

Liquid::Template.register_tag('last_modified_at', Jekyll::LastModifiedAtTag)
