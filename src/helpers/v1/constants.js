const UNIT_PROPS = [
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft'
];

const NAKED_PROPS = [
  'borderColor',
  'borderStyle',
  'opacity',
  'backgroundSize',
  'backgroundRepeat',
  'backgroundColor',
  'color',
  'overflowX',
  'overflowY'
];

const PARENT_PROPS = [
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft'
];

const POSITION_PROPS = [
  'top',
  'left'
];

export default {
  UNIT_PROPS: UNIT_PROPS,
  NAKED_PROPS: NAKED_PROPS,
  PARENT_PROPS: PARENT_PROPS,
  POSITION_PROPS: POSITION_PROPS,
  INTEGER_PROPS: [].concat(UNIT_PROPS, PARENT_PROPS, POSITION_PROPS),
  DEFAULTS: {
    borders: {
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0
    },
    all: {
      version: 1,
      isColumn: false,
      gradient: null,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 0,
      backgroundPositionY: 0,
      backgroundSize: 'auto',
      backgroundImage: null,
      backgroundColor: 'transparent',
      color: '#333333',
      rotate: 0,
      opacity: 1,
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      position: 'normal',
      widthMode: 'em',
      maxWidth: 320,
      width: 320,
      top: 0,
      left: 0,
      scale: 1,
      height: 0,
      overflow: 'hidden'
    },
    TextBlock: {
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10
    },
    ImageBlock: {
      height: 120
    },
    YoutubeBlock: {
      height: 180,
      chromeless: true,
      fluid: true,
      autoplay: false
    },
    InputBlock: {
      type: 'Text',
      placeholder: 'Placeholder text...'
    }
  }
}