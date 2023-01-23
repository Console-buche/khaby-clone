import { Text } from "@react-three/drei";

type OpenerText = {
  py: number;
};

export const OpenerText = ({ py }: OpenerText) => {
  return (
    <group position-y={py}>
      <Text
        fontSize={0.25}
        letterSpacing={0.005}
        position-z={0.1}
        textAlign={"left"}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        AN EXPERIENCE WITH SOCIAL MEDIA SUPERSTAR
        <meshBasicMaterial depthTest={false} />
      </Text>
      <Text
        fontSize={1.25}
        letterSpacing={0.005}
        position-z={0.1}
        position-y={-0.75}
        textAlign={"left"}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        KHABY LAME
        <meshBasicMaterial depthTest={false} />
      </Text>
    </group>
  );
};
