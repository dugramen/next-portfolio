import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function bg3d() {
  return (
    <div className="absolute inset-0">
      <Cube />
    </div>
  );
}

function Cube(
  p: Partial<{
    translate: [number, number, number];
    scale: [number, number, number];
    rotate: [number, number, number];
    style: ComponentProps<"div">["style"];
  }>
) {
  const [translate, scale, rotate] = [
    p.translate?.join(" "),
    p.scale?.join(" "),    p.rotate?.join(" "),
  ];
  return (
    <>
      <Face
        style={{
          translate,
          scale,
          rotate,
          backgroundColor: "white",
          ...p.style,
        }}
      />
      <Face
        style={{
          translate,
          scale,
          rotate,
          backgroundColor: "white",
          ...p.style,
        }}
      />
      <Face
        style={{
          translate,
          scale,
          rotate,
          backgroundColor: "white",
          ...p.style,
        }}
      />
      <Face
        style={{
          translate,
          scale,
          rotate,
          backgroundColor: "white",
          ...p.style,
        }}
      />
      <Face
        style={{
          translate,
          scale,
          rotate,
          backgroundColor: "white",
          ...p.style,
        }}
      />
      <Face
        style={{
          translate,
          scale,
          rotate,
          backgroundColor: "white",
          ...p.style,
        }}
      />
    </>
  );
}

function Face(p: ComponentProps<"div">) {
  return <div {...p} className={twMerge("absolute")} />;
}
