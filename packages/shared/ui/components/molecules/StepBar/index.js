const DynamicStepper = ({ numSteps, tabsData, activeTab }) => {
  const steps = Array.from({ length: numSteps }, (_, index) => index + 1);
  return (
<div>
      <ol className="flex items-center w-full mb-4 sm:mb-5">
        {steps.map((stepNumber, index) => (
          <li
            key={index}
            className={`flex w-full items-center ${
              index === activeTab
                ? 'text-reliableBlack-500 dark:text-[#FBB90F] after:border-[#FBB90F]'
                : 'after:border-reliableBlack70 dark:after:border-reliableBlack70'
            }`}
          >
            <span
              className={`flex items-center justify-center w-[22px] h-[22px] mr-2 ${
                index === activeTab
                  ? 'bg-yellow-300 dark:black-400'
                  : index < activeTab
                  ? 'bg-[#1DA707] dark:bg-[#1DA707]'
                  : 'bg-reliableBlack70 dark:bg-gray-100'
              } rounded-full lg:h-12 lg:w-12 text-white text-xs dark:text-white shrink-0`}
            >
              {stepNumber}
            </span>
            <span className="flex p-1 text-sm capitalize text-reliableBlack items-center">
              {tabsData[index].title}
            </span>
            {index < steps.length - 1 && (
              <span
                className={`h-0.5 min-w-[10px] md:w-full mx-2 ${
                  index < activeTab
                    ? 'bg-reliableBlack70 dark:bg-reliableBlack70'
                    : 'bg-gray-300 dark:bg-gray-300'
                }`}
              ></span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DynamicStepper;
