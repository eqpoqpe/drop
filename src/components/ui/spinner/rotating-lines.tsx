import { FunctionComponent, ReactElement } from "react";

type Props = {
  visible?: boolean;
};

export const RotatingLines: FunctionComponent<Props> = ({
  visible = true,
}): ReactElement | null => {
  return !visible ? null : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"animate-spinner"}
    >
      <path
        opacity="0.125"
        d="M74.7487 18.1802L62.0208 30.9081C60.0682 32.8608 60.0682 36.0266 62.0208 37.9792C63.9734 39.9318 67.1393 39.9318 69.0919 37.9792L81.8198 25.2513C83.7724 23.2987 83.7724 20.1328 81.8198 18.1802C79.8672 16.2276 76.7014 16.2276 74.7487 18.1802Z"
        fill="black"
      />
      <path
        opacity="0.25"
        d="M90 45H72C69.2386 45 67 47.2386 67 50C67 52.7614 69.2386 55 72 55H90C92.7614 55 95 52.7614 95 50C95 47.2386 92.7614 45 90 45Z"
        fill="black"
      />
      <path
        opacity="0.375"
        d="M81.8198 74.7487L69.0919 62.0208C67.1392 60.0682 63.9734 60.0682 62.0208 62.0208C60.0682 63.9734 60.0682 67.1393 62.0208 69.0919L74.7487 81.8198C76.7013 83.7724 79.8672 83.7724 81.8198 81.8198C83.7724 79.8672 83.7724 76.7014 81.8198 74.7487Z"
        fill="black"
      />
      <path
        opacity="0.5"
        d="M55 90V72C55 69.2386 52.7614 67 50 67C47.2386 67 45 69.2386 45 72V90C45 92.7614 47.2386 95 50 95C52.7614 95 55 92.7614 55 90Z"
        fill="black"
      />
      <path
        opacity="0.625"
        d="M25.2513 81.8198L37.9792 69.0919C39.9318 67.1392 39.9318 63.9734 37.9792 62.0208C36.0266 60.0682 32.8607 60.0682 30.9081 62.0208L18.1802 74.7487C16.2276 76.7013 16.2276 79.8672 18.1802 81.8198C20.1328 83.7724 23.2986 83.7724 25.2513 81.8198Z"
        fill="black"
      />
      <path
        opacity="0.75"
        d="M10 55H28C30.7614 55 33 52.7614 33 50C33 47.2386 30.7614 45 28 45H10C7.23858 45 5 47.2386 5 50C5 52.7614 7.23858 55 10 55Z"
        fill="black"
      />
      <path
        opacity="0.875"
        d="M18.1802 25.2513L30.9081 37.9792C32.8608 39.9318 36.0266 39.9318 37.9792 37.9792C39.9318 36.0266 39.9318 32.8607 37.9792 30.9081L25.2513 18.1802C23.2987 16.2276 20.1328 16.2276 18.1802 18.1802C16.2276 20.1328 16.2276 23.2986 18.1802 25.2513Z"
        fill="black"
      />
    </svg>
  );
};
