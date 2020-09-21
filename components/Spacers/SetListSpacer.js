import SpacerStyles from './Spacer.module.css';

const SetListSpacer = props => (
  <div className={SpacerStyles.SetList}>
    <div className={SpacerStyles.SetListCentered}>
      <div className={SpacerStyles.SetListText}>
        <span>{props.text}</span>
      </div>
      <div className={SpacerStyles.SetListSymbol}>
        <span>&#10985;&nbsp;{props.number}</span>
      </div>
      <div className={SpacerStyles.SetListTempo}>
        <span>tempo{props.tempo}</span>&nbsp;
      </div>
    </div>
  </div>
);

export default SetListSpacer;
