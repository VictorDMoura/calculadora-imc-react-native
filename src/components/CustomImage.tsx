import { Image, ImageProps } from "react-native";

type Props = ImageProps & {
  width: number;
  height: number;
};

export default function CustomImage({ source, width, height, ...rest }: Props) {
  return (
    <Image source={source} style={[{ width, height }, rest.style]} {...rest} />
  );
}
