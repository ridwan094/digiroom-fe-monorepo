import { Fragment, useEffect } from 'react';
import Text from '../Text'

const Modal = ({
  onClose = () => {},
  size,
  children,
  visible,
  modalClassName = '',
  className,
  bodyClassName,
  headerClassName,
  headerTitleClassName,
  title = '',
  header = false,
  mobile = false,
  btnCloseTestId,
  titleTestId,
  containerTestId,
  ...props
}) => {
  useEffect(() => {
    /* istanbul ignore next */
    if (typeof window === 'undefined') return;

    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      /* istanbul ignore next */
      if (typeof window === 'undefined') return;
      document.body.style.overflow = 'auto';
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <div
        data-testid={containerTestId}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        className={`${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } duration-300 ease-in-out fixed w-[100vw] h-[100vh] z-[9999] ${
          mobile
            ? `inset-0 h-[100%]`
            : `bg-opacity-80 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`
        } ${modalClassName}`}
      >
        <div
          data-testid="dataTestCardModal"
          className={`${
            visible ? 'scale-100' : 'scale-0'
          } duration-[400ms] ease-in-out flex flex-col absolute bg-white ${
            size ? size : `w-[588px] h-[488px]`
          } ${
            mobile
              ? `min-h-[100%] h-[100%]`
              : `max-h-[90vh] md-max-w:max-w-[92vw] rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `
          } ${className}`}
          {...props}
        >
          {header && (
            <div
              className={`flex items-center justify-between md-max-w:p-4 px-8 pt-8 pb-4 ${headerClassName}`}
            >
              <Text.Head4
                className={`md-max-w:text-head5 ${headerTitleClassName}`}
                data-testid={titleTestId}
              >
                {title}
              </Text.Head4>
              <div
                onClick={onClose}
                className={`flex items-center justify-center cursor-pointer w-8 h-8`}
                data-testid={btnCloseTestId}
              >
                {/* <Icons.Close size={32} fill={colors.black90} /> */}
              </div>
            </div>
          )}
          <div className={`${!mobile && `overflow-auto`} ${bodyClassName} flex justify-center`}>
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Modal.defaultProps = {
  visible: false,
  className: '',
  bodyClassName: '',
  headerClassName: '',
  headerTitleClassName: '',
  size: null,
  btnCloseTestId: null,
  titleTestId: null,
  containerTestId: 'dataTestWrapperModal',
};

export default Modal;
