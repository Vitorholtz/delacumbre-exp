type QuoteIconProps = {
  className?: string;
};

export default function QuoteIcon({ className }: QuoteIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15.4113 32.5L10.5037 20.8587H16.0961V6.25L0.117803 6.25V20.8587L7.76457 32.5H15.4113Z"
        fill="currentColor"
      />
      <path
        d="M39.3152 32.5L34.4076 20.8587H40V6.25L24.0217 6.25V20.8587L31.6685 32.5H39.3152Z"
        fill="currentColor"
      />
    </svg>
  );
}
