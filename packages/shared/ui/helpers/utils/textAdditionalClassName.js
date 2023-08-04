const textAdditionalClassName = (textBreak, overflow) => {
    let transformedBreak = 'break-words',
      transformedOverflow = 'overflow-hidden';
  
    // make an static value for text break and overflow className, so it can be used dynamically without tw-merge
    // can't simply use overflow-${overflow} or break-${textBreak} because if tailwind not declare the class in another components same page it will be invalid
  
    switch (textBreak) {
      case 'all':
        transformedBreak = 'break-all';
        break;
      case 'normal':
        transformedBreak = 'break-normal';
        break;
      default:
        transformedBreak = 'break-words';
        break;
    }
  
    switch (overflow) {
      case 'visible':
        transformedOverflow = 'overflow-visible';
        break;
      case 'clip':
        transformedOverflow = 'overflow-clip';
        break;
      case 'auto':
        transformedOverflow = 'overflow-auto';
        break;
      default:
        transformedOverflow = 'overflow-hidden';
        break;
    }
  
    return `${transformedBreak} ${transformedOverflow}`;
  };
  
  export default textAdditionalClassName;
  