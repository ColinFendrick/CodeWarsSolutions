const htmlEndTagByStartTag = tag => `</${tag.match(/<([a-z]+).*>/)[1]}>`;
