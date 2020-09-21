import React from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import { interpolate } from 'flubber';

const PATH_UNCHECKED = 'M32,32';
// const PATH_UNCHECKED =
//     'M8 61.3c-2.9 0-5.3-2.4-5.3-5.3V8c0-2.9 2.4-5.3 5.3-5.3h48c2.9 0 5.3 2.4 5.3 5.3v48c0 2.9-2.4 5.3-5.3 5.3H8z';
const PATH_CHECKED =
  'M25.9,47.8c-0.4,0-0.7-0.1-1-0.4L12.5,35c-0.3-0.3-0.4-0.6-0.4-1c0-0.6,0.2-0.9,0.4-1.1l4.1-4.1c0.3-0.3,0.6-0.5,1.1-0.5s0.7,0.1,1,0.4l7.2,7.2l19.4-19.4c0.3-0.3,0.6-0.5,1-0.5c0.4,0,0.7,0.1,1,0.5l4.1,4.1c0.2,0.2,0.4,0.5,0.4,1.1c0,0.4-0.1,0.8-0.4,1L27,47.4C26.7,47.7,26.3,47.8,25.9,47.8z';
const PATH_INDETERMINATE =
  'M48.6,36.3H15.4c-1,0-1.7-0.8-1.7-1.7v-5.2c0-1,0.8-1.7,1.7-1.7h33.2c1,0,1.7,0.8,1.7,1.7v5.2C50.3,35.5,49.6,36.3,48.6,36.3z';

const interpolators = {};
const getInterpolator = (from, to) => {
  const key = `${from}:${to}`;
  return (
    interpolators[key] ||
    (interpolators[key] = interpolate(from, to, { maxSegmentLength: 0.1 }))
  );
};

// const StyledSvg = styled.svg`
//     color: #555555;
//     height: 1em;
//     fill: currentcolor;
// `;

export default class CheckboxIcon extends React.PureComponent {
  static getDerivedStateFromProps({ indeterminate, checked }, state) {
    const lastPath = state.currentPath;
    let currentPath = PATH_UNCHECKED;
    if (indeterminate) {
      currentPath = PATH_INDETERMINATE;
    } else if (checked) {
      currentPath = PATH_CHECKED;
    }
    return {
      currentPath,
      lastPath
    };
  }

  state = {
    currentPath: PATH_UNCHECKED
  };

  getBoxBorderColor = () => {
    if (this.props.disabled) return '#cfcfcf';
    if (!this.props.checked && !this.props.indeterminate) return '#cfcfcf';
    return 'currentcolor';
  };
  getBoxFillColor = () => {
    if (this.props.disabled) return '#f4f4f4';
    if (this.props.indeterminate) return 'currentcolor';
    if (!this.props.checked) return '#fff';
    return 'currentcolor';
  };
  render() {
    const hasMark = this.state.currentPath !== PATH_UNCHECKED;
    const boxBorderColor = this.getBoxBorderColor();
    const boxFillColor = this.getBoxFillColor();
    return (
      // <StyledSvg
      <svg
        viewBox="0 0 64 64.1"
        height="1.5rem"
        color="#ff6822"
        preserveAspectRatio="xMidYMid meet"
        onClick={this.props.onClick}
      // className={this.props.className}
      >
        <g>
          <Spring reset native from={{ t: 0 }} to={{ t: 1 }}>
            {({ t }) => (
              <g>
                <animated.path
                  // className="checkbox-outer-box"
                  d="M56 64H8c-4.4 0-8-3.6-8-8V8c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8z"
                  fill={boxBorderColor}
                />
                <animated.path
                  // className="checkbox-inner-box"
                  d="M8 61.3c-2.9 0-5.3-2.4-5.3-5.3V8c0-2.9 2.4-5.3 5.3-5.3h48c2.9 0 5.3 2.4 5.3 5.3v48c0 2.9-2.4 5.3-5.3 5.3H8z"
                  fill={boxFillColor}
                />
                <animated.path
                  // className="checkbox-mark"
                  d={t.interpolate(
                    getInterpolator(
                      this.state.lastPath,
                      this.state.currentPath
                    )
                  )}
                  fill={
                    !hasMark
                      ? boxBorderColor
                      : this.props.disabled
                        ? '#cfcfcf'
                        : '#fff'
                  }
                />
              </g>
            )}
          </Spring>
        </g>
        {/* </StyledSvg> */}
      </svg>
    );
  }
}
