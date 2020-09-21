import SpacerStyles from './Spacer.module.css';

const PostSpacer = props => (
  <div className={SpacerStyles.PostSpacer}>
    <div className={SpacerStyles.absCentered}>
      <span>{props.text}</span>&nbsp;
      <span>&#8671;</span>
    </div>
  </div>
);

export default PostSpacer;
