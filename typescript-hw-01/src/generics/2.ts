type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    position: bottom.position,
    color: top.color,
    weight: bottom.weight,
  };
}
