import { ClickOutside } from "./ClickOutside";

interface Props {
  type?: string
  show: boolean;
  title?: string;
  subTitle?: string;
  icon?: JSX.Element;
  children?: JSX.Element;
  closeModal: (n: boolean) => void;
}

const Modal = (props: Props) => {
  const { type, icon, show, title, children, subTitle, closeModal } = props;
  return (
    <>
      {/* <div
      className={`fixed h-screen w-screen bg-black top-0 left-0 bg-opacity-40 z-40 ${
        show ? 'block' : 'hidden'
      }`}
      onClick={() => closeModal(false)}
    />
    <ClickOutside
      onclickoutside={() => closeModal(false)}
      className={`bg-white fixed z-50 rounded-xl p-${'10'}`}
      style={{
        top: show ? '50%' : '-50%',
        opacity: show ? 1 : 0,
        width: "40%",
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      {show && (
        <div className="h-fit f-grow" style={{ position: 'relative' }}>
          {children}
        </div>
      )}
    </ClickOutside> */}
      {show && (
        <>

          <div className={`justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none mx-3 ${show ? 'block' : 'hidden'}`}>
            <ClickOutside
              onclickoutside={() => closeModal(false)}
              className={` fixed z-50 rounded-xl mx-0 overflow-hidden`}
              style={{
                top: show ? '50%' : '-50%',
                opacity: show ? 1 : 0,
                // width: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div style={{overflow: 'hidden'}} className="relative my-6 mx-auto overflow-hidden">
                <div className="overflow-y-hidden border-0 rounded-3xl p-5 sm:p-10 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <svg className="icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0"
                    onClick={() => closeModal(false)}
                    width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_1_654)">
                      <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" fill="white" fillOpacity="0.3" />
                      <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <path d="M25 15L15 25" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 15L25 25" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <filter id="filter0_b_1_654" x="-13.6665" y="-13.6667" width="67.3333" height="67.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_654" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_654" result="shape" />
                      </filter>
                    </defs>
                  </svg>


                  {type === "icon" && (
                    <div className="flex items-center justify-center m-auto mt-10 w-20 h-20 rounded-full">
                      {icon}
                    </div>
                  )}
                  <div className="mx-auto">
                    <h5 className="text-4xl font-semibold mt-5 text- w-80">
                      {title && title}
                    </h5>
                    <p className="text-center container mt-2 text-grey-slate text-base w-80">
                      {subTitle}
                    </p>
                  </div>
                  {children}
                </div>
              </div>
            </ClickOutside>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Modal;
