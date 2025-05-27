import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import "./style.scss"

registerBlockType('innopixel/header-inner-block', {
  edit() {
    const props = useBlockProps();

    return (
      <header {...props} className="header-inner-block">
        <div className="header-inner-block__inner page-container">
          <InnerBlocks
            allowedBlocks={['core/site-title', 'core/paragraph', 'core/navigation']} 
            renderAppender={InnerBlocks.ButtonBlockAppender}
          />
        </div>
      </header>
    );
  },

  save() {
    const props = useBlockProps.save();

    return (
      <header {...props} className="header-inner-block">
        <div className="header-inner-block__inner page-container">
          <InnerBlocks.Content />
        </div>
      </header>
    );
  },
});
