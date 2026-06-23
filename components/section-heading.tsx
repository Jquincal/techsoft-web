interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <div className={alignment}>
      <div className="mb-4 h-px w-20 bg-[linear-gradient(90deg,var(--brand),transparent)]" />
      <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
