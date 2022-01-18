function Heading({ variant, content, customClass = "", customId = null }) {
  if (variant === "h1") {
    return (
      <h1
        id={customId}
        className={"text-3xl lg:text-4xl font-bold my-5 lg:my-6 " + customClass}
      >
        {content}
      </h1>
    );
  } else if (variant === "h2") {
    return (
      <h2
        id={customId}
        className={"text-3xl font-bold my-4 lg:my-5 " + customClass}
      >
        {content}
      </h2>
    );
  } else if (variant === "h3") {
    return (
      <h3
        id={customId}
        className={"text-2xl font-bold my-3 lg:my-4 " + customClass}
      >
        {content}
      </h3>
    );
  } else if (variant === "h4") {
    return (
      <h4
        id={customId}
        className={"text-xl font-bold my-2 lg:my-3 " + customClass}
      >
        {content}
      </h4>
    );
  } else if (variant === "h5") {
    return (
      <h5
        id={customId}
        className={"text-lg font-bold my-1 lg:my-2 " + customClass}
      >
        {content}
      </h5>
    );
  } else if (variant === "h6") {
    return (
      <h6
        id={customId}
        className={"text-base font-bold my-0.5 lg:my-1 " + customClass}
      >
        {content}
      </h6>
    );
  } else {
    return <></>;
  }
}

export default Heading;
