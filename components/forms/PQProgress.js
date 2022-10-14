import React from "react";

export default function PQProgress({ stepTitles, currentStep, moveStep }) {
  return (
    <div>
      <div id="pq-progress" className="form-step-progress">
        {stepTitles.map((stepTitle, index) => {
          return (
            <div className={currentStep === index ? "item active" : "item"} key={index}>
              <div className="inner">
                <button
                  onClick={() => moveStep(index)}
                  disabled={currentStep < index}
                  className={currentStep < index ? "circle" : "circle active" }
                  title={stepTitle}>
                  {index + 1}
                </button>
              </div>
              <div className="text">
                <button
                  onClick={() => moveStep(index)}
                  disabled={currentStep < index}
                  className={currentStep < index ? "btn" : "btn active"}>
                  {stepTitle}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
