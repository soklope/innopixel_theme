import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('innopixel/my-custom-block', {
  edit({ attributes, setAttributes }) {
    return (
      <RichText
        tagName="p"
        value={attributes.content}
        onChange={(content) => setAttributes({ content })}
        placeholder={__('Write something...', 'innopixel')}
      />
    );
  },
  save({ attributes }) {
    return <RichText.Content tagName="p" value={attributes.content} />;
  },
});
