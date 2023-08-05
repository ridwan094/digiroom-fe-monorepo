const DynamicStepper = ({ steps, activeTab }) => {
  return (
    <div>
      <ol className="flex items-center w-full mb-4 sm:mb-5">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex w-full items-center ${
              index === activeTab
                ? 'text-supportiveRed dark:text-supportiveRed after:border-supportiveRed'
                : 'after:border-reliableBlack20 dark:after:border-reliableBlack20'
            }`}
          >
            <span
              className={`flex items-center justify-center w-10 h-10 ${
                index === activeTab || index < activeTab
                  ? 'bg-supportiveRed dark:bg-supportiveRed'
                  : 'bg-reliableBlack20 dark:bg-reliableBlack20'
              } rounded-full lg:h-12 lg:w-12 dark:text-white shrink-0`}
            >
              {step.icon}
            </span>
            {index < steps.length - 1 && (
              <span
                className={`h-1 w-full ${
                  index < activeTab
                    ? 'bg-supportiveRed dark:bg-supportiveRed'
                    : 'bg-reliableBlack20 dark:bg-reliableBlack20'
                }`}
              ></span>
            )}
          </li>
        ))}
      </ol>
      {steps[activeTab].content}
    </div>
  );
};

export default DynamicStepper;
