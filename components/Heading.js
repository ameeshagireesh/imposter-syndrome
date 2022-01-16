function Heading({ variant, content, customClass = "" }) {
  if (variant === "h1") {
    return (
      <h1 className={"text-4xl font-bold mb-6 " + customClass}>{content}</h1>
    );
  } else if (variant === "h2") {
    return (
      <h2 className={"text-3xl font-bold mb-5 " + customClass}>{content}</h2>
    );
  } else if (variant === "h3") {
    return (
      <h3 className={"text-2xl font-bold mb-4 " + customClass}>{content}</h3>
    );
  } else if (variant === "h4") {
    return (
      <h4 className={"text-xl font-bold mb-3 " + customClass}>{content}</h4>
    );
  } else if (variant === "h5") {
    return (
      <h5 className={"text-lg font-bold mb-2 " + customClass}>{content}</h5>
    );
  } else if (variant === "h6") {
    return (
      <h6 className={"text-base font-bold mb-1 " + customClass}>{content}</h6>
    );
  } else {
    return <></>;
  }
}

export default Heading;
